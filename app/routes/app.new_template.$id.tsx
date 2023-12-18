import { json } from "@remix-run/node";
import { Page } from "@shopify/polaris";
import { ulid } from "ulid";
import { authenticate } from "~/shopify.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
// @ts-ignore
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORE_BY_TOKEN, GET_TEMPLATE } from "~/graphql/query";
import { CREATE_TEMPLATE } from "~/graphql/mutation";
import { useEffect } from "react";
import SpinnerLayout from "~/components/layout/Spinner";

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
                        name: "Copy of " + templateData.getTemplate.name,
                        image: templateData.getTemplate.image,
                        data: templateData.getTemplate.data,
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
            navigate(`../template/${templateId}`);
        } catch (err) {
            console.log(err);
        }
    }

    const { loading: templateLoading, error: templateError, data: templateData } = useQuery(GET_TEMPLATE, {
        variables: {
            input: {
                id: id,
                store_id: "NULL",
            }
        }
    });

    const [createTemplate] = useMutation(CREATE_TEMPLATE, {
        update(cache, { data: { createTemplate } }) {
            const templateId = id; // Replace with the correct template ID
            const templateKey = cache.identify({
                __typename: 'Template',
                id: templateId,
                store_id: storeData.getStoreByToken.id,
            });

            cache.modify({
                id: templateKey,
                fields: {
                    data(existingData = null) {
                        return createTemplate.data || existingData;
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeLoading, templateLoading, templateData, id]);

    if (templateError || storeError) {
        return (
            <Page fullWidth>
                <p>An error occurred</p>
            </Page>
        )
    } else {
        return (
            <Page fullWidth>
                <SpinnerLayout />
            </Page>
        )
    }
}
