import { Layout, Page, Card, Text, InlineGrid, MediaCard, EmptyState, InlineStack } from "@shopify/polaris";
import { EditMajor, CircleCancelMajor, CirclePlusMajor } from '@shopify/polaris-icons';
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { templateModel } from "~/models/templates.model";
import { authenticate } from "~/shopify.server";
import storeModel from "~/models/store.model";

// Loader dung de fetch du lieu
export async function loader({ request }: LoaderFunctionArgs) {
    const { session } = await authenticate.admin(request);
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || '1';
    const limit = 6;

    const shop = await storeModel.findOne({ myshopify_domain: session.shop })
    if (shop) {
        const custom = await templateModel.find({
            type: "Custom",
            status: true,
            store_id: shop.id,
        }).limit(limit).skip(limit * (parseInt(page) - 1));

        const count = await templateModel.find({
            type: "Custom",
            status: true,
            store_id: shop.id,
        }).countDocuments();

        const recommend = await templateModel.find({
            type: "Recommend",
            status: true,
        }).limit(4);

        return json({
            custom,
            recommend,
            currentPage: parseInt(page),
            totalPage: Math.ceil(count / limit),
            total: count,
            shop: shop,
        });
    } else {
        return null;
    }

}
export default function TemplatesPage() {
    // Lay du lieu tu ham loader
    const navigate = useNavigate();
    const data = useLoaderData<typeof loader>();

    const EmptyTemplateState = () => (
        <EmptyState
            heading="Look like you don't have any templates yet"
            action={{
                content: "Create template",
                onAction: () => { navigate(`../template/new`); },
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
            <p>Let's create a new one or explore our recommend templates</p>
        </EmptyState>
    )

    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card>
                        <Text variant="headingLg" as="h5" alignment="center">
                            Recommend Templates
                        </Text>
                        <div style={{
                            width: 'auto',
                            height: 'auto',
                            marginTop: "10px",
                        }}>
                            <InlineStack wrap={false} gap="400">
                                <div style={{
                                    width: "270px",
                                    height: "320px",
                                }}>
                                    <MediaCard
                                        size="small"
                                        portrait
                                        title="New template"
                                        primaryAction={{
                                            content: 'Create a new template',
                                            onAction: () => { navigate(`../template/new`); },
                                            icon: CirclePlusMajor,
                                        }}
                                        description="Blank"
                                    >
                                        <img
                                            alt=""
                                            width="100%"
                                            height="180px"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                            src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg">
                                        </img>
                                    </MediaCard>
                                </div>
                                <div style={{
                                    width: 'auto',
                                    height: "320px",
                                }}>
                                    <InlineGrid gap="300" columns={4}>
                                        {data?.recommend.map((value: any, key = 1) => (
                                            <div key={key++}>
                                                <MediaCard
                                                    size="small"
                                                    portrait
                                                    title={value.name}
                                                    primaryAction={{
                                                        content: 'Open and Edit',
                                                        onAction: () => { navigate(`../template/${value._id}`); },
                                                        icon: EditMajor,
                                                    }}
                                                    description={value.type}
                                                >
                                                    <img
                                                        alt=""
                                                        width="100%"
                                                        height="180px"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center',
                                                        }}
                                                        src={value.image}>
                                                    </img>
                                                </MediaCard>
                                            </div>
                                        ))}
                                    </InlineGrid>
                                </div>
                            </InlineStack>
                        </div>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <div style={{
                            height: '50px',
                            width: 'auto',
                        }}>

                        </div>

                        {data?.custom.length === 0 ? (
                            <EmptyTemplateState />
                        ) : (
                            <InlineGrid gap="300" columns={6}>
                                {data?.custom.map((template: any, key = 1) => (
                                    <div key={key++}>
                                        <MediaCard
                                            portrait
                                            title={template.name}
                                            primaryAction={{
                                                content: 'Edit',
                                                onAction: () => {
                                                    navigate(`../template/${template._id}`);
                                                },
                                                icon: EditMajor,
                                            }}
                                            secondaryAction={{
                                                content: 'Remove',
                                                onAction: () => { },
                                                destructive: true,
                                                icon: CircleCancelMajor,
                                            }}
                                            description={template.type}
                                        >
                                            <img
                                                alt=""
                                                width="100%"
                                                height="180px"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                }}
                                                src={template.image}>
                                            </img>
                                        </MediaCard>
                                    </div>
                                ))}
                            </InlineGrid>
                        )
                        }
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
