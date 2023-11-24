import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HELLO_QUERY } from "~/graphql/query";
import { LOGIN_MUTATION } from "./mutation";
import { ClientErrorResponse, SuccessResponse } from "./response";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  uri: "http://localhost:4000/graphql",
});

/**
 *
 * @param {*} token // Token without prefix Bearer
 */
export const isAuthenticated = async (token) => {};

export const helloWorld = async () => {
  const response = await client.query({
    query: HELLO_QUERY,
  });

  return response;
};

export const login = async ({ username, password }) => {
  try {
    const response = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: {
          username: username,
          password: password,
        },
      },
    });
    return new SuccessResponse({
      message: "Login successfully",
      data: {
        accessToken: response.data.login,
      },
    });
  } catch (err) {
    return new ClientErrorResponse({
      message: err.message,
    });
  }
};

export default client;
