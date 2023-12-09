import { json } from "@remix-run/node";
import { Page, Spinner } from "@shopify/polaris";
import { ulid } from "ulid";
import { authenticate } from "~/shopify.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
// @ts-ignore
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORE_BY_TOKEN, GET_TEMPLATE } from "~/graphql/query";
import { CREATE_TEMPLATE } from "~/graphql/mutation";
import { useEffect } from "react";

export async function loader({ request, params }: any) {
    const { session } = await authenticate.admin(request);

    return json({
        session,
        id: params.id,
    })
}

export default function TemplatePage() {
    const { session, id } = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    const { loading: storeLoading, error: storeError, data: storeData } = useQuery(GET_STORE_BY_TOKEN, {
        variables: {
            input: {
                accessToken: session.accessToken,
            }
        }
    });

    const DuplicateTemplate = async () => {
        try {
            const { data: newTemplateData } = await createTemplate({
                variables: {
                    input: {
                        id: ulid(),
                        name: templateData.getTemplate.name,
                        image: null,
                        data: templateData.getTemplate.name,
                        status: true,
                        type: "Custom",
                        store_id: storeData?.getStoreByToken.id,
                    }
                }
            });
            const templateId = newTemplateData.createTemplate.id;
            navigate(`../template/${templateId}`);
        } catch (err) {
            console.log(err);
        }
    }

    const BlankTemplate = async () => {
        try {
            console.log('Blank')
            const { data: newTemplateData } = await createTemplate({
                variables: {
                    input: {
                        id: ulid(),
                        name: "undefined",
                        image: null,
                        data: null,
                        status: true,
                        type: "Custom",
                        store_id: storeData?.getStoreByToken.id,
                    }
                }
            });
            const templateId = newTemplateData.createTemplate.id;
            console.log(newTemplateData.createTemplate);
            navigate(`../template/${templateId}`);
        } catch (err) {
            console.log(err);
        }
    }

    const { loading: templateLoading, error: templateError, data: templateData } = useQuery(GET_TEMPLATE, {
        variables: {
            input: {
                id: id,
                store_id: storeData.getStoreByToken.id,
            }
        }
    });

    const [createTemplate] = useMutation(CREATE_TEMPLATE, {
        update(cache, { data: { createTemplate } }) {
            // Read the data from the cache for the appropriate query
            const { getTemplate }: any = cache.readQuery({
                query: GET_TEMPLATE,
                variables: {
                    input: {
                        id: id,
                        store_id: storeData.getStoreByToken.id,
                    },
                },
            });

            // Update the template data in the cache with the new template
            cache.writeQuery({
                query: GET_TEMPLATE,
                variables: {
                    input: {
                        id: id,
                        store_id: storeData.getStoreByToken.id,
                    },
                },
                data: {
                    getTemplate: {
                        ...getTemplate,
                        data: createTemplate.data,
                    },
                },
            });
        },
    });

    useEffect(() => {

        if (!storeLoading && !templateLoading) {
            if (id === 'new') {
                BlankTemplate();
            } else if (templateData.getTemplate?.type === "Recommend") {
                DuplicateTemplate();
            }
        }
    }, [storeLoading, templateLoading, templateData, id]);

    if (storeLoading || templateLoading || !templateData.getTemplate) {
        return (
            <Page fullWidth>
                <Spinner></Spinner>
            </Page>
        )
    } else if (templateError || storeError) {
        return (
            (<Page fullWidth>
                <p>An error occurred</p>
            </Page>)
        )
    } else {
        return (
            <Page fullWidth>
                <Spinner></Spinner>
            </Page>
        )
    }

}
