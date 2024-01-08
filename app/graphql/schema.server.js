const { buildSchema } = require("graphql")
export const schema = buildSchema(`
    scalar JSON
    scalar Date

    input LoginInput {
        username: String
        password: String
    }
    
    input GetStoreInput {
        id: String,
        accessToken: String,
    }
    
    input GetAdminInput {
        id: String
    }

    input GetTemplateInput {
        id: String!,
        store_id: String!,
    }

    input GetSampleTInput {
        id: String!,
    }

    input QueryTemplateFilter {
        name: String,
        status: Boolean,
        store_id: String,
        sort_column: String,
        sort_value: String,
        limit: Int,
        page: Int,
    }

    input QuerySampleT_Filter {
        status: Boolean,
        sort_column: String,
        sort_value: String,
    }

    input QuerySearchFilter{
        name: String,
    }

    input CreateTemplateInput{
        id: String,
        name: String,
        image: String,
        data: JSON,
        status: Boolean,
        type: String,
        store_id: String,
        base_template: String,
    }

    input UpdateTemplateInput{
        id: String,
        name: String,
        image: String,
        data: JSON,
        status: Boolean,
    }
    
    input DeleteTemplateInput{
        id: String,
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

    type SampleT {
        id: String,
        name: String,
        image: String,
        data: JSON,
        status: Boolean,
        download: Int,
        createdAt: Date,
        updatedAt: Date,
    }

    type Template {
        id: String,
        name: String,
        image: String,
        data: JSON,
        status: Boolean,
        store_id: String,
        createdAt: Date,
        updatedAt: Date,
    }

    type TemplatePaging {
        templates: [Template],
        currentPage: Int!,
        totalPage: Int!,
        total: Int!,
    }
    
    type Query {
        hello: String
        getAllStores: [Store]
        getStoreByToken(input: GetStoreInput): Store
        getStoreByID(input: GetStoreInput): Store
        getAllAdmins: [Admin]
        getAdmin(input: GetAdminInput): Admin
        getTemplate(input: GetTemplateInput): Template
        getTemplates(input: QueryTemplateFilter): TemplatePaging
        getSamplesT(input: QuerySampleT_Filter): [SampleT]
        getSampleT(input: GetSampleTInput): SampleT
    }
      
    type Mutation {
        login(input: LoginInput): String
        createAdmin(input: CreateAdminInput): Admin
        updateAdmin(input: UpdateAdminInput): Admin
        deleteAdmin(input: DeleteAdminInput): Admin
        createTemplate(input: CreateTemplateInput): Template
        updateTemplate(input: UpdateTemplateInput): Template
        deleteTemplate(input: DeleteTemplateInput): Template
    }
`)