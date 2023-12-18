import { json } from "@remix-run/node";
import {
    useLoaderData, useNavigate,
} from "@remix-run/react";
import {
    Page,
} from "@shopify/polaris";
import type { LoaderFunctionArgs } from "@remix-run/node";

import { authenticate } from "../shopify.server";
import StoreModel from "~/models/store.model";
import axios from "axios";
import { useEffect } from "react";
import SpinnerLayout from "~/components/layout/Spinner";

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
    useLoaderData<any>();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('../app/templates');

    }, [navigate]);

    return (
        <Page>
            <SpinnerLayout />
        </Page>
    );
}
