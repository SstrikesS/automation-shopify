import mongoose from "mongoose";
import type { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

export type TemplateType = {
    id?: String | null,
    name?: String | null,
    image?: String | null,
    data?: Record<string, any>,
    status?: Boolean | null,
    type?: String | null,
    store_id?: String | null,
    createdAt?: NativeDate,
    updatedAt?: NativeDate,
}

export const TemplateSchema = new Schema<TemplateDocument, TemplateModel>({
    id: {
        type: String,
        require: true,
    },
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
}, {
    timestamps: true,
})

export interface TemplateDocument extends Document, TemplateType { }

export interface TemplateModel extends Model<TemplateDocument> { }

export const templateModel = mongoose.model<TemplateDocument, TemplateModel>('templates', TemplateSchema);

export async function CreateTemplate(template: TemplateType) {
    try {
        const data = await templateModel.create({
            name: template.name,
            image: template.image,
            data: template.data,
            status: template.status,
            type: template.type,
            store_id: template.store_id,
        }) as TemplateType

        return data;
    } catch (error) {
        console.error(error);

        return null;
    }
}

export async function CopyTemplate(template: TemplateType) {
    try {
        const data = await templateModel.create({
            name: `Copy of ${template.name}`,
            image: "",
            data: template.data,
            status: true,
            type: "Custom",
            store_id: template.store_id,
        }) as TemplateType;

        return data;
    } catch (error) {
        console.error(error);

        return null;
    }
}

export async function getTemplate(id: string) {
    try {
        const data = await templateModel.findById(id) as TemplateType;
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

export async function saveTemplate(id: string, template: any) {
    try {
        await templateModel.findOneAndUpdate(
            {
                _id: id
            },
            {
                name: template.name,
                data: template.data,
            },
            {
                timestamps: true,
            }
        ) as TemplateType;

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}

// export async function updateTemplate() {

// }
