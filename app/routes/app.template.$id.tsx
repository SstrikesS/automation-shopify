import { json } from "@remix-run/node";
import { Card, Text } from "@shopify/polaris";
import { ClientOnly } from "remix-utils/client-only";
import EmailTemplateEditor from "~/components/layout/EmailEditor.client";
import { emptyTemplate } from "~/helpers";
import storeModel from "~/models/store.model";
import { authenticate } from "~/shopify.server";
import { getTemplate, CopyTemplate, CreateTemplate } from "~/models/templates.model";
import { useLoaderData, useNavigate } from "@remix-run/react";
import SkeletonExample from "~/components/layout/SkeletonExample";

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

            return json({
                template: newTemplate,
                navigate: true,
            })
        }

        const template = await getTemplate(params.id);

        if (template) {
            if (template.type === "Recommend") {
                const newTemplate = CopyTemplate(template);

                return json({ template: newTemplate, navigate: true, });
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
    const navigate = useNavigate();

    if (data) {
        if (data.navigate === true) {

            return (
                <div>
                    <SkeletonExample />
                </div>
            )
        } else {
            return (
                <div>
                    <Card>
                        <div style={{
                            height: "80px",
                        }}>
                            <Text variant="headingLg" as="h5" alignment="start">
                                Edit Templates
                            </Text>
                        </div>
                        <ClientOnly fallback={null}>
                            {() => <EmailTemplateEditor template={data.template} />}
                        </ClientOnly>
                    </Card>
                </div >
            )
        }
    } else {
        navigate('/');

        return (
            <div>
                <SkeletonExample />
            </div>
        )
    }
}