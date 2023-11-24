import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
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
    }
}, {
    timestamps: true,
})

export default mongoose.model('Template', TemplateSchema);

export interface Template {
    _id: string,
    name: string,
    image: string,
    data: object,
    status: boolean,
    type: 'Custom' | 'Recommend',
}

// export async function getTemplates(filter: QueryFilter) {
//     const query = await Model.find({
//         type: filter.type,
//         name: {
//             $regex: '.*' + filter.key + '.*'
//         },
//     }).limit(filter.limit).skip(filter.limit * (filter.page - 1)).exec();

//     const count = await Model.find({
//         type: filter.type,
//         name: {
//             $regex: '.*' + filter.key + '.*'
//         },
//     }).countDocuments();
//     return {
//         templates: query,
//         currentPage: filter.page,
//         totalPage: Math.ceil(count / filter.limit),
//         total: count
//     }
// }
