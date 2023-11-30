import "@shopify/shopify-app-remix/adapters/node";
import {
    AppDistribution,
    DeliveryMethod,
    shopifyApp,
    LATEST_API_VERSION,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import { restResources } from "@shopify/shopify-api/rest/admin/2023-10";
import prisma from "./db.server";
import mongoose from "mongoose";
import GraphQLServer from "./graphql/graphql.server";

const shopify = shopifyApp({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
    apiVersion: LATEST_API_VERSION,
    scopes: process.env.SCOPES?.split(","),
    appUrl: process.env.SHOPIFY_APP_URL || "",
    authPathPrefix: "/auth",
    sessionStorage: new PrismaSessionStorage(prisma),
    distribution: AppDistribution.AppStore,
    restResources,
    webhooks: {
        APP_UNINSTALLED: {
            deliveryMethod: DeliveryMethod.Http,
            callbackUrl: "/webhooks",
        },
    },
    hooks: {
        afterAuth: async ({ session }) => {
            shopify.registerWebhooks({ session });
        },
    },
    future: {
        v3_webhookAdminContext: true,
        v3_authenticatePublic: true,
    },
    ...(process.env.SHOP_CUSTOM_DOMAIN
        ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
        : {}),
});

const dbConnectionString = "mongodb+srv://admin:20194677@cluster0.tytl7jo.mongodb.net/mongodb_gr?retryWrites=true&w=majority";
// const dbConnectionString = "mongodb://localhost:27017/GR1-email-template";
mongoose.set("debug", true);
mongoose.set("debug", { color: true });
mongoose
    .connect(dbConnectionString)
    .then((result) => {
        console.log("Connect to mongodb successfully");
        GraphQLServer();
    })
    .catch((err) => {
        console.log("Error occured when connect to mongodb: ", err.message);
    });

export default shopify;
export const apiVersion = LATEST_API_VERSION;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
