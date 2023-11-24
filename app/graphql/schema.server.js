const { buildSchema } = require("graphql")
export const schema = buildSchema(`
    input LoginInput {
        username: String
        password: String
    }
    
    input GetStoreInput {
        id: String
    }
    
    input GetAdminInput {
        id: String
    }
    
    input CreateAdminInput {
        username: String
        password: String
        confirmedPassword: String
        email: String
    }
    input UpdateAdminInput {
        id: String
        username: String
        email: String
    }
    
    input DeleteAdminInput {
        id: String
    }
    
    type Store {
        id: String,
        name: String,
        email: String,
        shop: String,
        domain: String,
        scope: String,
        country: String,
        customer_email: String,
        myshopify_domain: String,
        plan_name: String,
        plan_display_name: String,
        shop_owner: String,
        iana_timezone: String,
        currency: String,
        address1: String,
        address2: String,
        phone: String,
        created_at: String,
        accessToken: String
    }

    type Admin {
        id: String,
        username: String,
        password: String,
        email: String
    }
    
    type Query {
        hello: String
        getAllStores: [Store]
        getStore(input: GetStoreInput): Store
        getAllAdmins: [Admin]
        getAdmin(input: GetAdminInput): Admin
    }
      
    type Mutation {
        login(input: LoginInput): String
        createAdmin(input: CreateAdminInput): Admin
        updateAdmin(input: UpdateAdminInput): Admin
        deleteAdmin(input: DeleteAdminInput): Admin
    }
`)