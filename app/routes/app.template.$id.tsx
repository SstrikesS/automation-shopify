import { json } from "@remix-run/node";
import { Page } from "@shopify/polaris";
// @ts-ignore
import { ClientOnly } from "remix-utils/client-only";
import EmailTemplateEditor from "~/components/layout/EmailEditor.client";
import { authenticate } from "~/shopify.server";
import { useLoaderData } from "@remix-run/react";
import { GET_STORE_BY_TOKEN, GET_TEMPLATE } from "~/graphql/query";
// @ts-ignore
import { useQuery } from "@apollo/client";
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

    const { loading: storeLoading, error: storeError, data: storeData } = useQuery(GET_STORE_BY_TOKEN, {
        variables: {
            input: {
                accessToken: session.accessToken,
            }
        }
    });

    const { loading: templateLoading, error: templateError, data: templateData } = useQuery(GET_TEMPLATE, {
        variables: {
            input: {
                id: id,
                store_id: storeData.getStoreByToken.id,
            }
        }
    });

    if (storeLoading || templateLoading) {
        return (
            <Page fullWidth>
                <SpinnerLayout/>
            </Page>
        )
    } else if (templateError || storeError) {
        return (
            <Page fullWidth>
                <p>An error occurred</p>
            </Page>
        )
    } else {
        return (
            <Page fullWidth >
                <ClientOnly fallback={null}>
                    {() => <EmailTemplateEditor template={{
                        id: templateData.getTemplate.id,
                        name: templateData.getTemplate.name,
                        image: templateData.getTemplate.image,
                        data: templateData.getTemplate.data,
                        status: templateData.getTemplate.status,
                        store_id: templateData.getTemplate.store_id,
                        createdAt: templateData.getTemplate.createdAt,
                        updatedAt: templateData.getTemplate.updatedAt,
                    }} />}
                </ClientOnly>
            </Page>
        )
    }
}
