import mongoose from "mongoose";

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

export async function CreateTemplate(template: any) {
    const newTemplate = new templateModel(template);

    try {
        const data = await templateModel.create({
            newTemplate,
        })

        console.log(data);

        if (data) {
            return data;

        } else {

            return null;
        }
    } catch (error) {
        console.error(error);

        return null;
    }
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

export async function CopyTemplate(template: any) {
    const newTemplate = new templateModel({
        name: `Copy of ${template.name}`,
        image: "",
        data: template.data,
        status: true,
        type: "Custom",
        store_id: template.store_id,
    });

    try {
        const data = await templateModel.create({
            newTemplate,
        });

        if (data) {
            return data;

        } else {

            return null;
        }
    } catch (error) {
        console.error(error);

        return null;
    }
}

export async function getTemplate(id: string) {
    try {
        const data = await templateModel.findById(id);

        if (data) {
            return data;
        } else {

            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

// export async function updateTemplate() {

// }
