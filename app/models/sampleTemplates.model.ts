import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SampleSchema = new Schema({
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
    download: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true,
})

export const sampleTemplateModel = mongoose.model('sampleTemplates', SampleSchema);


