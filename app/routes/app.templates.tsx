import { Layout, Page, Card, Text, InlineGrid, MediaCard, EmptyState } from "@shopify/polaris";
import { EditMajor, CircleCancelMajor, CirclePlusMajor } from '@shopify/polaris-icons';
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import templatesModel from "~/models/templates.model";
import type { Template } from "~/models/templates.model";
import { emptyTemplate } from "~/helpers";
// Loader dung de fetch du lieu
export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || '1';
    const limit = 6;

    const custom = await templatesModel.find({
        type: "Custom",
        status: true,
    }).limit(limit).skip(limit * (parseInt(page) - 1));

    const count = await templatesModel.find({
        type: "Custom",
        status: true,
    }).countDocuments();

    const recommend = await templatesModel.find({
        type: "Recommend",
        status: true,
    }).limit(limit - 1);

    return json({
        data: {
            custom,
            recommend,
        },
        currentPage: parseInt(page),
        totalPage: Math.ceil(count / limit),
        total: count,
    });
}

export default function TemplatesPage() {
    // Lay du lieu tu ham loader
    const navigate = useNavigate();
    const { data, currentPage, totalPage, total } = useLoaderData<typeof loader>();
    console.log({ data, currentPage, totalPage, total });


    const EmptyTemplateState = ({ onAction }: any) => (
        <EmptyState
            heading="Look like you don't have any templates yet"
            action={{
                content: "Create template",
                onAction,
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
            <p>Let's create a new one or explore our recommend templates</p>
        </EmptyState>
    )

    const CreateTemplate = async () => {

        console.log('Innnnnnnnnnnnnn');
        const newTemplate = await templatesModel.create({
            name: "undefined",
            image: "",
            data: emptyTemplate,
            status: true,
            type: "Custom",

        });
        navigate(`../app/template/${newTemplate._id}`);
    }

    const handleCreateTemplate = async () => {
        await CreateTemplate();
    };

    const CreateFromRecommend = async (template: Template) => {
        const newTemplate = await templatesModel.create({
            template
        });

        navigate(`../app/template/${newTemplate._id}`);
    }
    shopify.loading(false);
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
                            <InlineGrid gap="300" columns={6}>
                                <div style={{
                                    height: "320px",
                                    width: "auto",
                                }}>
                                    <MediaCard
                                        size="small"
                                        portrait
                                        title="Blank template"
                                        primaryAction={{
                                            content: 'Create a new template',
                                            onAction: () => handleCreateTemplate,
                                            icon: CirclePlusMajor,
                                        }}
                                        description="Custom"
                                    >
                                        <img
                                            alt=""
                                            width="100%"
                                            height="180px"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                            src="">
                                        </img>
                                    </MediaCard>
                                </div>
                                {data.recommend.map((value: any, key = 1) => (
                                    <div key={key++}>
                                        <MediaCard
                                            size="small"
                                            portrait
                                            title={value.name}
                                            primaryAction={{
                                                content: 'Open and Edit',
                                                onAction: () => { CreateFromRecommend(value) },
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
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <div style={{
                            height: '50px',
                            width: 'auto',
                        }}>

                        </div>

                        {data.custom.length === 0 ? (
                            <EmptyTemplateState onAction={() => navigate("/")} />
                        ) : (
                            <InlineGrid gap="300" columns={6}>
                                {data.custom.map((template: any, key = 1) => (
                                    <div key={key++}>
                                        <MediaCard
                                            portrait
                                            title={template.name}
                                            primaryAction={{
                                                content: 'Edit',
                                                onAction: () => {

                                                    shopify.loading(true);
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
