import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql"
import { schema } from "./schema.server";
import { resolver } from "./resolver.server";

export default function GraphQLServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true,
    }))
    app.listen(4000, () => {
        console.log('Server is running on PORT 4000');
    });
}