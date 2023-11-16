import { AppProvider, Frame, Layout, Page, Card, Text, InlineGrid, MediaCard } from "@shopify/polaris";
import { EditMajor, CircleCancelMajor, CirclePlusMajor } from '@shopify/polaris-icons';
import { SideBar } from "../component/sideBar";
import { TopBarMarkup, logo } from "../component/topBar";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getLists, getListsCount, getSampleList } from "~/models/templates";
import { useLoaderData } from "@remix-run/react";
import type { QueryFilter } from "~/helper";
// import { authenticate } from "~/shopify.server";
// Loader dung de fetch du lieu
export async function loader({ request }: LoaderFunctionArgs) {
    // fetch api
    const sample = await getSampleList(4);

    const query_filter: QueryFilter = {
        limit: 5,
        page: 1,
        sort_by: 'id',
        sort: 'asc',
        status: true,
        key: 'Custom',
        search_by: 'type',
    };

    const templates = await getLists(query_filter)
    const count = await getListsCount(query_filter);

    // const { admin, session} = await authenticate.admin(request);
    // const user = admin.rest.resources.Shop.all({session});

    return json({
        // user,
        sample,
        templates,
        total_count: count,
        per_page: query_filter.limit,
        page_count: Math.floor(count / query_filter.limit),
        current_page: query_filter.page ?? 1,
    });
}

export default function TemplatesPage() {
    // Lay du lieu tu ham loader
    const data = useLoaderData<typeof loader>();

    return (
        <div>
            <AppProvider
                theme="light"
                i18n={{
                    Polaris: {
                        TopBar: {
                            toggleMenuLabel: "Toggle menu",
                            style: {
                                background: "red",
                            },
                        },
                        Frame: {
                            skipToContent: "Skip to content",
                            navigationLabel: "Navigation",
                            Navigation: {
                                closeMobileNavigationLabel: "Close navigation",
                            },
                        },
                    },
                }}
            ></AppProvider>
            <Frame
                navigation={SideBar}
                topBar={TopBarMarkup()}
                logo={logo}
            >
                <Page fullWidth>
                    <Layout>
                        <Layout.Section>
                            <Card>
                                <Text variant="headingLg" as="h5" alignment="center">
                                    Recommand Templates
                                </Text>
                                <div style={{
                                    width: 'auto',
                                    height: 'auto',
                                    marginTop: "10px",
                                }}>
                                    <InlineGrid gap="300" columns={5}>
                                        <div style={{
                                            height: "320px",
                                            width: "auto",
                                        }}>
                                            <MediaCard
                                                size="small"
                                                portrait
                                                title="Blank template"
                                                primaryAction={{
                                                    content: 'Create',
                                                    onAction: () => { },
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
                                                    src="https://m.media-amazon.com/images/I/21Qm5-GT3RL._AC_UF894,1000_QL80_.jpg">
                                                </img>
                                            </MediaCard>
                                        </div>
                                        {data.sample.map((value, key = 1) => (
                                            <div key={key++}>
                                                <MediaCard
                                                    size="small"
                                                    portrait
                                                    title={value.name}
                                                    primaryAction={{
                                                        content: 'Open',
                                                        onAction: () => { },
                                                        icon: EditMajor,
                                                    }}
                                                    secondaryAction={{
                                                        content: 'Dismiss',
                                                        onAction: () => { },
                                                        icon: CircleCancelMajor,
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
                                <InlineGrid gap="300" columns={5}>
                                    {data.templates.map((value, key = 1) => (
                                        <div key={key++}>
                                            <MediaCard
                                                portrait
                                                title={value.name}
                                                primaryAction={{
                                                    content: 'Edit',
                                                    onAction: () => { },
                                                    icon: EditMajor,
                                                }}
                                                secondaryAction={{
                                                    content: 'Remove',
                                                    onAction: () => { },
                                                    icon: CircleCancelMajor,
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
                            </Card>
                        </Layout.Section>
                    </Layout>
                </Page>
            </Frame>
        </div >
    );
}
