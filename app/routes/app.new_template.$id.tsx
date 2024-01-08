import { json } from "@remix-run/node";
import { Page } from "@shopify/polaris";
import { ulid } from "ulid";
import { authenticate } from "~/shopify.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
// @ts-ignore
import { useMutation, useQuery } from "@apollo/client";
import { GET_SAMPLET, GET_STORE_BY_TOKEN, GET_TEMPLATE } from "~/graphql/query";
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
            if (templateData.getSampleT) {
                const { data: newTemplateData } = await createTemplate({
                    variables: {
                        input: {
                            id: ulid(),
                            name: "Copy of " + templateData.getSampleT.name,
                            image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
                            data: templateData.getSampleT.data,
                            status: true,
                            store_id: storeData?.getStoreByToken.id,
                            base_template: id,
                        }
                    }
                });
                const templateId = newTemplateData.createTemplate.id;
                navigate(`../template/${templateId}`);
            } else {
                const { data: newTemplateData } = await createTemplate({
                    variables: {
                        input: {
                            id: ulid(),
                            name: "Copy of " + template2Data.getTemplate.name,
                            image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
                            data: template2Data.getTemplate.data,
                            status: true,
                            store_id: storeData?.getStoreByToken.id,
                            base_template: null,
                        }
                    }
                });
                const templateId = newTemplateData.createTemplate.id;
                navigate(`../template/${templateId}`);
            }


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
                        image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
                        data: null,
                        status: true,
                        store_id: storeData?.getStoreByToken.id,
                        base_template: null,
                    }
                }
            });
            const templateId = newTemplateData.createTemplate.id;
            navigate(`../template/${templateId}`);
        } catch (err) {
            console.log(err);
        }
    }

    const { loading: templateLoading, error: templateError, data: templateData } = useQuery(GET_SAMPLET, {
        variables: {
            input: {
                id: id,
            }
        }
    });

    const { loading: template2Loading, error: template2Error, data: template2Data } = useQuery(GET_TEMPLATE, {
        variables: {
            input: {
                id: id,
                store_id: storeData?.getStoreByToken.id,
            }
        }
    });

    const [createTemplate] = useMutation(CREATE_TEMPLATE, {
        update(cache, { data: { createTemplate } }) {
            const templateId = id;
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
        if (!storeLoading && !templateLoading && !template2Loading) {
            if (id === 'new') {
                BlankTemplate();
            } else if (templateData.getSampleT || template2Data.getTemplate) {
                DuplicateTemplate();
            } else {
                console.log('error');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeLoading, templateLoading, template2Loading, templateData, id]);

    if (templateError || storeError || template2Error) {
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
