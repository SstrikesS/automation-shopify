import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useNavigate, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../shopify.server";
import DefaultLayout from "~/components/layout/DefaultLayout";
import axios from "axios";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session } = await authenticate.admin(request);
    const config = {
        headers: {
            "X-Shopify-Access-Token": session.accessToken,
            "Accept-Encoding": "application/json",
        },
    };
    let shop = await axios.get(
        `https://${session.shop}/admin/api/2023-10/shop.json`,
        config
    );
    shop = shop.data.shop;
    return json({ apiKey: process.env.SHOPIFY_API_KEY || "", shop });
};

export default function App() {
    const { apiKey, shop } = useLoaderData<typeof loader>();

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/auth/login');
    }

    return (
        <AppProvider isEmbeddedApp apiKey={apiKey}>
            <ui-nav-menu>
                <Link to="/app" rel="home">
                    Home
                </Link>
                <Link to="/app/templates">Templates</Link>
                <Link to="/app/sampleTemplate">Sample Template</Link>
                <Link to="/app/flows">Flows</Link>
                <Link to="/app/customers">Customer</Link>
                <Link to="/app/automation">Automation</Link>
                <Link to="/auth/login">Test Router</Link>
            </ui-nav-menu>
            <DefaultLayout handleLogout={handleLogout} shop={shop}>
                <Outlet />
            </DefaultLayout>
        </AppProvider>
    );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
    return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
    return boundary.headers(headersArgs);
};
