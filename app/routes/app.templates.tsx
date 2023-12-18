import { Layout, Page, Card, Text, InlineGrid, MediaCard, EmptyState, InlineStack, Pagination } from "@shopify/polaris";
import { EditMajor, CircleCancelMajor, CirclePlusMajor, ExploreImagesMajor } from '@shopify/polaris-icons';
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
// @ts-ignore
import { useQuery } from "@apollo/client";
import { GET_STORE_BY_TOKEN, GET_TEMPLATES } from "~/graphql/query";
import SpinnerLayout from "~/components/layout/Spinner";

// Loader dung de fetch du lieu
export async function loader({ request, params }: LoaderFunctionArgs) {
    const { session } = await authenticate.admin(request);
    const url = new URL(request.url);
    const page = url.searchParams.get('page') ?? '1';

    return json({
        session,
        page: page ?? parseInt(page),
    });

}
export default function TemplatesPage() {
    // Lay du lieu tu ham loader
    const navigate = useNavigate();

    const { session, page } = useLoaderData<typeof loader>();
    console.log(page);
    const { data: store, loading: storeLoading } = useQuery(GET_STORE_BY_TOKEN, {
        variables: {
            input: {
                accessToken: session.accessToken,
            }

        }
    });

    const { data: custom, loading: customLoading } = useQuery(GET_TEMPLATES, {
        variables: {
            input: {
                name: "",
                status: true,
                type: "Custom",
                store_id: store?.getStoreByToken.id,
                limit: 6,
                page: page ? parseInt(page) : 1,
                sort_column: 'createdAt',
                sort_value: 'desc',
            }
        }
    });

    const { data: recommend, loading: recommendLoading } = useQuery(GET_TEMPLATES, {
        variables: {
            input: {
                name: "",
                status: true,
                type: "Recommend",
                store_id: "NULL",
                limit: 4,
                page: 1,
                sort_column: 'id',
                sort_value: 'asc',
            }
        }
    })

    const EmptyTemplateState = () => (
        <EmptyState
            heading="Look like you don't have any templates yet"
            action={{
                content: "Create new template",
                onAction: () => { navigate(`../template/new`); },
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
            <p>Let's create a new one or explore our recommend templates</p>
        </EmptyState>
    )

    if (storeLoading || customLoading || recommendLoading) {
        return (
            <Page fullWidth>
                <SpinnerLayout />
            </Page>
        )
    } else {

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
                                        width: 'auto',
                                        height: "320px",
                                    }}>
                                        <InlineGrid gap="300" columns={5}>
                                            <MediaCard
                                                size="small"
                                                portrait
                                                title="New template"
                                                primaryAction={{
                                                    content: 'Create a new template',
                                                    onAction: () => { navigate(`../new_template/new`); },
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
                                            {recommend?.getTemplates.templates.map((value: any, key = 1) => (
                                                <div key={key++}>
                                                    <MediaCard
                                                        size="small"
                                                        portrait
                                                        title={value.name}
                                                        primaryAction={{
                                                            content: 'Duplicate',
                                                            onAction: () => { navigate(`../new_template/${value.id}`); },
                                                            icon: EditMajor,

                                                        }}
                                                        secondaryAction={{
                                                            content: 'Explore more',
                                                            onAction: () => { navigate(`../sampleTemplate`); },
                                                            icon: ExploreImagesMajor,
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
                            {custom?.getTemplates.templates.length === 0 ? (
                                <EmptyTemplateState />
                            ) : (
                                <InlineGrid gap="300" columns={6}>
                                    {custom?.getTemplates.templates.map((template: any, key = 1) => (
                                        <div key={key++}>
                                            <MediaCard
                                                portrait
                                                title={template.name}
                                                primaryAction={{
                                                    content: 'Edit',
                                                    onAction: () => {
                                                        navigate(`../template/${template.id}`);
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
                            )}
                            <div style={{
                                alignItems: 'center'
                            }}>
                                <Pagination
                                    onPrevious={() => {
                                        navigate(`../templates?page=${custom?.getTemplates.currentPage - 1}`)
                                    }}
                                    onNext={() => {
                                        navigate(`../templates?page=${custom?.getTemplates.currentPage + 1}`)
                                    }}
                                    type="page"
                                    hasNext={custom?.getTemplates.currentPage < custom?.getTemplates.totalPage}
                                    hasPrevious={custom?.getTemplates.currentPage > 1}
                                    label={custom?.getTemplates.currentPage}
                                />
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
        );
    }
}
