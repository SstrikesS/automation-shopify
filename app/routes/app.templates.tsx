import { Layout, Page, Card, Text, InlineGrid, EmptyState, InlineStack, Pagination, Combobox, Button, Icon, Select, ActionList, Modal } from "@shopify/polaris";
import { SearchMinor } from '@shopify/polaris-icons';
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
// @ts-ignore
import { useMutation, useQuery } from "@apollo/client";
import { GET_SAMPLEST, GET_STORE_BY_TOKEN, GET_TEMPLATES } from "~/graphql/query";
import SpinnerLayout from "~/components/layout/Spinner";
import { useCallback, useEffect, useRef, useState } from "react";
import { DELETE_TEMPLATE } from "~/graphql/mutation";


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
    const navigate = useNavigate();
    const { session, page } = useLoaderData<typeof loader>();
    const [selected, setSelected] = useState('createdAt/desc');
    const [inputValue, setInputValue] = useState('');
    const timeoutRef = useRef<number | null>(null);
    const [searchMarkup, setSearchMarkup] = useState(<SpinnerLayout></SpinnerLayout>);
    const [removeModal, setRemoveModal] = useState(false);
    const [removeID, setRemoveID] = useState('');

    const toggleRemoveModal = useCallback(() => {
        setRemoveModal((removeModal) => !removeModal);
    }, []);

    const [removeTemplate] = useMutation(DELETE_TEMPLATE);

    const deleteTemplate = async () => {

        await removeTemplate({
            variables: {
                input: {
                    id: removeID
                }
            }
        });
        window.location.reload();
    };

    const handleSearchChange = useCallback((value: string) => {
        setInputValue(value);
    }, []);

    const handleSelectChange = useCallback(
        (value: any) => {
            setSelected(value);

        }, [],);

    const options = [
        { label: 'Recent Added', value: 'createdAt/desc' },
        { label: 'Last Updated', value: 'updatedAt/desc' },
        { label: 'Name A-Z', value: 'name/asc', },
        { label: 'Name Z-A', value: 'name/desc' },
    ];
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
                store_id: store?.getStoreByToken.id,
                limit: 5,
                page: page ? parseInt(page) : 1,
                sort_column: selected.split('/')[0],
                sort_value: selected.split('/')[1],
            }
        }
    });

    const { data: search_template, loading: search_loading } = useQuery(GET_TEMPLATES, {
        variables: {
            input: {
                name: inputValue,
                status: true,
                store_id: store?.getStoreByToken.id,
                limit: 6,
                page: 1,
                sort_column: 'name',
                sort_value: 'asc',
            }
        }
    })
    const { data: recommend, loading: recommendLoading } = useQuery(GET_SAMPLEST, {
        variables: {
            input: {
                status: true,
                sort_column: 'download',
                sort_value: 'desc',
            }
        }
    })

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (inputValue.length > 0) {
            timeoutRef.current = setTimeout(() => {
                if (search_loading) {
                    setSearchMarkup(<SpinnerLayout></SpinnerLayout>);
                } else if (search_template?.getTemplates.templates.length === 0) {
                    setSearchMarkup(<p style={{ textAlign: 'center' }}>No result found</p>)
                } else {
                    setSearchMarkup(
                        <ActionList
                            items={search_template?.getTemplates.templates.slice(0, 4).map((template: any) => ({
                                content: template.name,
                                helpText: "Template",
                                image: template.image,
                                onAction: () => { navigate(`../app/template/${template.id}`) }
                            }))}
                        />
                    )
                }
            }, 500) as any;
        } else {
            setSearchMarkup(<SpinnerLayout></SpinnerLayout>);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search_template])

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
        console.log(window.location.protocol + "//" + window.location.host);
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
                                        <InlineGrid gap="400" columns={6}>
                                            <div>
                                                <Card padding="0" key={0}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            flexDirection: 'column',
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            width="100%"
                                                            height="250px"
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                            }}
                                                            src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
                                                        </img>
                                                        <Text as="h2" variant="headingLg" alignment="center" >New template</Text>
                                                        <div style={{ marginBottom: '15px', marginTop: '10px' }}>
                                                            <Button variant="primary" tone="success" fullWidth onClick={() => { navigate(`../new_template/new`); }}>
                                                                Create a new template
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                            {recommend?.getSamplesT.slice(0, 5).map((value: any, key = 1) => (
                                                <div key={key++}>
                                                    <Card padding="0">
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                flexDirection: 'column',
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                width="100%"
                                                                height="250px"
                                                                style={{
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center',
                                                                }}
                                                                src={value.image}>
                                                            </img>
                                                            <Text as="h2" variant="headingLg" alignment="center" >{
                                                                value.name.length > 25
                                                                    ? `${value.name.substring(0, 25)}...`
                                                                    : value.name
                                                            }</Text>
                                                            <div style={{ marginBottom: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}>
                                                                <InlineGrid gap="400" columns={2}>
                                                                    <Button variant="primary" tone="success" fullWidth onClick={() => { navigate(`../new_template/${value.id}`); }}>
                                                                        Get
                                                                    </Button>
                                                                    <Button variant="tertiary" fullWidth onClick={() => { navigate(`../sampleTemplate`); }}>
                                                                        More
                                                                    </Button>
                                                                </InlineGrid>
                                                            </div>
                                                        </div>
                                                    </Card>
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
                                <InlineGrid gap="500" columns={3}>
                                    <div></div>
                                    <Combobox
                                        activator={
                                            <Combobox.TextField
                                                prefix={<Icon source={SearchMinor} />}
                                                value={inputValue}
                                                label="Search templates"
                                                labelHidden
                                                onChange={handleSearchChange}
                                                placeholder="Search templates"
                                                autoComplete="off"
                                            />
                                        }
                                    >
                                        {inputValue.length > 0 ? (
                                            searchMarkup
                                        ) : null}
                                    </Combobox>

                                    <Select
                                        labelInline
                                        label="Sort by"
                                        options={options}
                                        onChange={handleSelectChange}
                                        value={selected}
                                    />
                                </InlineGrid>

                            </div>
                            {custom?.getTemplates.templates.length === 0 ? (
                                <EmptyTemplateState />
                            ) : (
                                <InlineGrid gap="500" columns={5}>
                                    {custom?.getTemplates.templates.map((template: any, key: any) => (
                                        <div key={key}>
                                            <Card padding="0">
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        width="100%"
                                                        height="250px"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center',
                                                        }}
                                                        src={template.image}>
                                                    </img>
                                                    <Text as="h2" variant="headingLg" alignment="center" ><Text as="h2" variant="headingLg" alignment="center" >{
                                                        template.name.length > 25
                                                            ? `${template.name.substring(0, 25)}...`
                                                            : template.name
                                                    }</Text></Text>
                                                    <div style={{ marginBottom: '15px', marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}>
                                                        <InlineGrid gap="400" columns={3}>
                                                            <Button variant="primary" tone="success" fullWidth onClick={() => { navigate(`../template/${template.id}`); }}>
                                                                Edit
                                                            </Button>
                                                            <Button variant="tertiary" fullWidth onClick={() => { navigate(`../new_template/${template.id}`); }}>
                                                                Duplicate
                                                            </Button>
                                                            <Modal
                                                                size="small"
                                                                activator={<Button variant="primary" tone="critical" onClick={() => { toggleRemoveModal(); setRemoveID(template.id) }}>Delete</Button>}
                                                                open={removeModal}
                                                                onClose={toggleRemoveModal}
                                                                title="Delete Template"
                                                                primaryAction={{
                                                                    content: 'OK',
                                                                    destructive: true,
                                                                    onAction: deleteTemplate,
                                                                }}
                                                                secondaryActions={[
                                                                    {
                                                                        content: 'Cancel',
                                                                        onAction: toggleRemoveModal,
                                                                    },
                                                                ]}
                                                            >
                                                                <Modal.Section>
                                                                    Are you sure you want to delete this template?
                                                                </Modal.Section>

                                                            </Modal>
                                                        </InlineGrid>
                                                    </div>
                                                </div>
                                            </Card>

                                        </div>
                                    ))}
                                </InlineGrid>
                            )}
                            <div style={{
                                marginTop: "20px",
                                float: 'right'
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
