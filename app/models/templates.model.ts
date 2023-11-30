import { json } from "@remix-run/node";
import mongoose from "mongoose";
import { emptyTemplate } from "~/helpers";

const Schema = mongoose.Schema;

export const TemplateSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    data: {
        type: Object,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    store_id: {
        type: String,
        require: true,
    }
})

export const templateModel = mongoose.model('templates', TemplateSchema);

export async function CreateTemplate(shop: any) {
    const newTemplate = new templateModel({
        name: "undefined",
        image: "",
        data: emptyTemplate,
        status: true,
        type: "Custom",
        store_id: shop.id
    });

    await newTemplate.save().then(() => {
        return json({ newTemplate });
    }).catch((e: any) => {
        console.log((e));
        return null;
    })
    // console.log(templateModel);
    // const newTemplate: any = templateModel.create({
    //     name: "undefined",
    //     image: "",
    //     data: emptyTemplate,
    //     status: true,
    //     type: "Custom",
    //     store_id: shop.id
    // }).then(() => {
    //     return json({ newTemplate });
    // }).catch((e: any) => {
    //     console.log(e)
    //     return null;
    // })
}

export async function CopyTemplate(shop: any, template: any) {
    const newTemplate = new templateModel({
        name: `Copy of ${template.name}`,
        image: "",
        data: template.data,
        status: true,
        type: "Custom",
        store_id: shop.id
    });

    await newTemplate.save().then(() => {
        return json({ newTemplate });
    }).catch((e: any) => {
        console.log((e));
        return null;
    })
}

// export async function updateTemplate() {

// }
