import AdminModel from "~/models/admin.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import StoreModel from "~/models/store.model";
import mongoose from "mongoose";
import { templateModel } from "~/models/templates.model";

export const verifyToken = async (bearerToken) => {
    if (!bearerToken) {
        throw new Error('You have to provide bearer token on the request headers');
    } else {
        const token = bearerToken.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        console.log('DECODED: ', decoded);
        if (!decoded) {
            throw new Error('Invalid access token');
        }
        return true;
    }
}

export const resolver = {
    hello: () => {
        return "Hello World";
    },
    getAllStores: async (args, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const stores = await StoreModel.find({});
            return stores;
        } else {
            throw new Error('Authentication Error');
        }
    },
    getAllAdmins: async (args, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const admins = await AdminModel.find({});
            return admins;
        } else {
            throw new Error('Authentication Error');
        }
    },
    getStoreByToken: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const store = await StoreModel.findOne({ accessToken: input.accessToken });
        return store;
        // } else {
        //     throw new Error('Authentication Error');
        // }
    },

    getStoreByID: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const store = await StoreModel.findOne({ _id: input.id });
        return store;
        // } else {
        //     throw new Error('Authentication Error');
        // }
    },
    getAdmin: async ({ input }, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const admin = await AdminModel.findOne({ _id: input.id });
            return admin;
        } else {
            throw new Error('Authentication Error');
        }
    },
    getTemplates: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const templates = await templateModel.find({
            name: {
                $regex: `.*${input.name}.*`,
            },
            type: input.type,
            status: input.status,
            store_id: input.store_id,
        }).limit(input.limit).skip(input.limit * (parseInt(input.page) - 1)).sort({
            [input.sort_column]: input.sort_value,
        });

        const count = await templateModel.countDocuments({
            name: {
                $regex: `.*${input.name}.*`,
            },
            status: input.status,
            type: "Custom",
            store_id: input.store_id,
        });

        return {
            templates: templates,
            currentPage: parseInt(input.page),
            totalPage: Math.ceil(count / input.limit),
            total: count,
        };
        // } else {
        //     throw new Error('Authentication Error');
        // }
    },

    getTemplate: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        if (input.id === 'new') {
            return null;
        } else {
            const template = await templateModel.findOne({ id: input.id, store_id: input.store_id });
            return template;
        }
        // } else {
        //     throw new Error('Authentication Error');
        // }
    },

    searchTemplate: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const templates = await templateModel.find({
            name: {
                $regex: `.*${input.name}.*`,
            },

        }).limit(input.limit).skip(input.limit * (parseInt(input.page) - 1)).sort({
            [input.sort_column]: input.sort_value,
        });
        // } else {
        //     throw new Error('Authentication Error');
        // }
    },
    login: async ({ input }, request) => {
        const { username, password } = input;

        const existedAdmin = await AdminModel.findOne({ username: username });
        if (!existedAdmin) {
            throw new Error('Username is not existed');
        }

        const isValidPassword = await bcrypt.compare(password, existedAdmin.password);

        if (!isValidPassword) {
            throw new Error('Wrong password');
        }

        const payload = {
            userId: existedAdmin._id,
        }

        const accessToken = await jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '24h',
        })

        return accessToken;
    },
    updateAdmin: async ({ input }, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const updatedAdmin = await AdminModel.findByIdAndUpdate(new mongoose.Types.ObjectId(input.id), {
                username: input.username,
                email: input.email
            });
            return updatedAdmin;
        } else {
            throw new Error('Authentication Error');
        }
    },
    createAdmin: async ({ input }, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const { username, password, confirmedPassword, email } = input;
            if (password !== confirmedPassword) {
                throw new Error('Password and confirmed password must be matched');
            }

            const existed = await AdminModel.findOne({ username: username });
            if (existed) {
                throw new Error('Username has already been registed');
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const newAdmin = await AdminModel.create({ username, password: hashedPassword, email });
            return newAdmin;
        } else {
            throw new Error('Authentication Error');
        }
    },

    createTemplate: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const { id, name, image, data, status, type, store_id } = input;

        const newTemplate = await templateModel.create({
            id: id,
            name: name,
            image: image,
            data: data,
            status: status,
            type: type,
            store_id: store_id
        });
        return newTemplate;
        // } else {
        //     throw new Error('Authentication Error');
        // }

    },
    updateTemplate: async ({ input }, request) => {
        // const bearerToken = request.headers.authorization;
        // const isAuthenticated = await verifyToken(bearerToken);
        // if (isAuthenticated) {
        const { id, name, image, data, status } = input;

        const updatedTemplate = await templateModel.findOneAndUpdate(
            {
                id: id
            },
            {
                name: name,
                image: image,
                data: data,
                status: status,
            },
            {
                timestamps: true,
            });
        return updatedTemplate;
        // } else {
        //     throw new Error('Authentication Error');
        // }

    },
    deleteAdmin: async ({ input }, request) => {
        const bearerToken = request.headers.authorization;
        const isAuthenticated = await verifyToken(bearerToken);
        if (isAuthenticated) {
            const deletedAdmin = await AdminModel.findByIdAndDelete(new mongoose.Types.ObjectId(input.id));
            return deletedAdmin;
        } else {
            throw new Error('Authentication Error');
        }
    }
}