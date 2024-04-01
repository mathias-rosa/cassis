import { defineMongooseModel } from '#nuxt/mongoose';

export const LinkShema = defineMongooseModel({
    name: 'link',
    schema: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        uid: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
        },
        createdBy: {
            type: String,
            required: true
        }
    }

})