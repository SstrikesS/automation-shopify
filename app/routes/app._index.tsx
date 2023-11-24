import { json } from "@remix-run/node";
import {
    useLoaderData,
    useSubmit,
} from "@remix-run/react";
import {
    Page,
    Card,
    Button,
    Form,
    FormLayout,
    TextField,
    BlockStack,
} from "@shopify/polaris";
import type { LoaderFunctionArgs } from "@remix-run/node";

import { authenticate } from "../shopify.server";
import StoreModel from "~/models/store.model";
import axios from "axios";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session } = await authenticate.admin(request);
    let shop;
    const config = {
        headers: {
            "X-Shopify-Access-Token": session.accessToken,
            "Accept-Encoding": "application/json",
        },
    };
    shop = await axios.get(
        `https://${session.shop}/admin/api/2023-10/shop.json`,
        config
    );
    shop = shop.data.shop;
    const shopData = await StoreModel.findOneAndUpdate(
        {
            id: shop.id
        },
        {
            id: shop.id,
            name: shop.name,
            email: shop.email,
            shop: shop.name,
            domain: shop.domain,
            scope: session.scope,
            country: shop.country_name,
            customer_email: shop.customer_email,
            myshopify_domain: shop.myshopify_domain,
            plan_name: shop.plan_name,
            plan_display_name: shop.plan_display_name,
            shop_owner: shop.shop_owner,
            iana_timezone: shop.iana_timezone,
            currency: shop.currency,
            address1: shop.address1 || "NULL",
            address2: shop.address2 || "NULL",
            phone: shop.phone || "NULL",
            created_at: shop.created_at,
            accessToken: session.accessToken,
        },
        {
            upsert: true,
        });

    return json({ shop: shopData });
};

export default function Index() {

    const { shop } = useLoaderData<any>();
    const submit = useSubmit();

    return (
        <Page>
            <BlockStack gap="500">
                <Card>
                    <Form onSubmit={() => submit({}, { replace: true, method: "GET" })}>
                        <FormLayout>
                            <TextField
                                label="Shop id"
                                value={shop.id}
                                type="password"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop name"
                                value={shop.name}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop email"
                                value={shop.email}
                                type="email"
                                autoComplete="email"
                            />

                            <TextField
                                label="Shop domain"
                                value={shop.domain}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop scope"
                                value={shop.domain}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop country"
                                value={shop.domain}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop customer email"
                                value={shop.domain}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop my shopify domain"
                                value={shop.myshopify_domain}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop plan name"
                                value={shop.plan_name}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop plan display name"
                                value={shop.plan_display_name}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop shop owner"
                                value={shop.shop_owner}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop iana timezone"
                                value={shop.iana_timezone}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop currency"
                                value={shop.currency}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop address1"
                                value={shop.address1}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop address2"
                                value={shop.address2}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop phone"
                                value={shop.phone}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop created at"
                                value={shop.created_at}
                                type="text"
                                autoComplete="text"
                            />

                            <TextField
                                label="Shop access token"
                                value={shop.accessToken}
                                type="text"
                                autoComplete="text"
                            />

                            <Button submit>Submit</Button>
                        </FormLayout>
                    </Form>
                </Card>
            </BlockStack>
        </Page>
    );
}
