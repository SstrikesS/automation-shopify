import { gql } from "@apollo/client";
/**
 * QUERY
 */
export const HELLO_QUERY = gql`
    query hello {
        hello
    }
`

export const GET_ALL_ADMINS = gql`
  query GetAllAdmins {
    getAllAdmins {
      id
      username
      password
      email
    }
  }
`;

export const GET_ALL_STORES = gql`
  query GetAllStores {
    getAllStores {
      id
      name
      email
      country
      myshopify_domain
    }
  }
`;

export const GET_STORE_BY_ID = gql`
  query GetStoreByID($input: GetStoreInput) {
    GetStoreByID(input: $input) {
        id
        name
        email
        shop
        domain
        scope
        country
        customer_email
        myshopify_domain
        plan_name
        plan_display_name
        shop_owner
        iana_timezone
        currency
        address1
        address2
        phone
        created_at
        accessToken
    }
  }
`;

export const GET_STORE_BY_TOKEN = gql`
  query GetStoreByToken($input: GetStoreInput) {
    getStoreByToken(input: $input) {
        id
        name
        email
        shop
        domain
        scope
        country
        customer_email
        myshopify_domain
        plan_name
        plan_display_name
        shop_owner
        iana_timezone
        currency
        address1
        address2
        phone
        created_at
        accessToken
    }
  }
`;

export const GET_ADMIN = gql`
    query GetAdmin($input: GetAdminInput) {
        getAdmin(input: $input) {
            id
            username
            email
        }
    }
`;

export const GET_TEMPLATE = gql`
    query GetTemplate($input : GetTemplateInput) {
        getTemplate(input: $input) {
            id
            name
            image
            data
            status
            store_id
            createdAt
            updatedAt
        }
    }
`;

export const GET_TEMPLATES = gql`
    query GetTemplates($input: QueryTemplateFilter) {
        getTemplates(input: $input) {
            templates {
                id
                name
                image
                data
                status
                store_id
                createdAt
                updatedAt
            }
            currentPage
            totalPage
            total
        }
    }
`;

export const GET_SAMPLEST = gql`
    query GetSamplesT($input: QuerySampleT_Filter) {
        getSamplesT(input: $input) {
            id
            name
            image
            data
            status
            download
            createdAt
            updatedAt
        }
    }
`;

export const GET_SAMPLET = gql`
    query GetSampleT($input : GetSampleTInput) {
        getSampleT(input: $input) {
            id
            name
            image
            data
            status
            download
            createdAt
            updatedAt
        }
    }
`;


