import mongoose from "mongoose";
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    id: {
        type: String, 
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    shop: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    scope: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
    customer_email: {
        type: String,
        required: true,
    },
    myshopify_domain: {
        type: String,
        required: true,
    },
    plan_name: {
        type: String,
        required: true,
    },
    plan_display_name: {
        type: String,
        required: true,
    },
    shop_owner: {
        type: String,
        required: true,
    },
    iana_timezone: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
    }
});

export default mongoose.model('Store', storeSchema);