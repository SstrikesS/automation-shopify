import { gql } from "@apollo/client";

/**
 * MUTATION
 */
export const LOGIN_MUTATION = gql`
    mutation Login($input: LoginInput) {
        login(input: $input)
    }
`;

export const DELETE_ADMIN = gql`
    mutation DeleteAdmin($input: DeleteAdminInput) {
        deleteAdmin(input: $input) {
            id
            username
            email
        }
    }
`

export const UPDATE_ADMIN = gql`
    mutation UpdateAdmin($input: UpdateAdminInput) {
        updateAdmin(input: $input) {
            id
            username
            email
        }
    }
`;

export const CREATE_ADMIN = gql`
    mutation CreateAdmin($input: CreateAdminInput) {
        createAdmin(input: $input) {
            id
            username
            email
        }
    }
`;