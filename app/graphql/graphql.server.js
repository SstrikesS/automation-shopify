import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http"
import { schema } from "./schema.server";
import { resolver } from "./resolver.server";

export default function GraphQLServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/graphql', createHandler({
        schema: schema,
        rootValue: resolver,
    }))
    app.listen(4000, () => {
        console.log('Server is running on PORT 4000');
    });
}