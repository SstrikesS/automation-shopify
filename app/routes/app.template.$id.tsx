import { Card, Text } from "@shopify/polaris";
import { ClientOnly } from "remix-utils/client-only";
import EmailTemplateEitor from "~/components/layout/EmailEditor.client";
export default function TemplatePage() {

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
                    {() => <EmailTemplateEitor />}
                </ClientOnly>
            </Card>
        </div >
    )
}