import { json, redirect } from "@remix-run/node";
import { Card } from "@shopify/polaris";
import { ClientOnly } from "remix-utils/client-only";
import EmailTemplateEditor from "~/components/layout/EmailEditor.client";
import { emptyTemplate } from "~/helpers";
import storeModel from "~/models/store.model";
import { authenticate } from "~/shopify.server";
import { getTemplate, CopyTemplate, CreateTemplate } from "~/models/templates.model";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request, params }: any) {
    const { session } = await authenticate.admin(request);

    const shop = await storeModel.findOne({ myshopify_domain: session.shop })

    if (shop) {
        if (params.id === "new") {
            const newTemplate = await CreateTemplate({
                name: "undefined",
                image: "",
                data: emptyTemplate,
                status: true,
                type: "Custom",
                store_id: shop.id
            });

            return redirect(`../template/${newTemplate?._id}`);
        }

        const template = await getTemplate(params.id);

        if (template) {
            if (template.type === "Recommend") {
                const newTemplate = await CopyTemplate({
                    name: template.name,
                    image: template.image,
                    data: template.data,
                    status: true,
                    type: "Custom",
                    store_id: shop.id,
                });
                return redirect(`../template/${newTemplate?._id}`);
            } else {
                return json({ template: template, navigate: false, });
            }
        }

        return null;
    }

    return null;
}

export default function TemplatePage() {
    const data = useLoaderData<typeof loader>();

        return (
            <Card>
                <ClientOnly fallback={null}>
                {() => <EmailTemplateEditor template={data?.template} />}
                    </ClientOnly>
            </Card>
        )
}
