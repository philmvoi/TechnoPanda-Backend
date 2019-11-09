export default `
type Customer {
    customer_id: Int!
    state_id: Int!
    customer_status_id: Int!
    customer_phone_number: String!
    customer_first_name: String!
    customer_last_name: String!
    customer_email: String
    customer_city: String
    customer_street_address: String
    customer_zipcode: String
    Height: String
    Weight: String
    Allergies: String
    Instagram: String
}

type CustomerReturn {
    customer_id: Int!
    state_id: Int!
    state_name: String!
    customer_phone_number: String!
    customer_first_name: String!
    customer_last_name: String!
    customer_email: String
    customer_city: String
    customer_street_address: String
    customer_zipcode: String
    Height: String
    Weight: String
    Allergies: String
    Instagram: String
}

input CustomerInput {
    state_id: Int!
    customer_status_id: Int
    customer_phone_number: String
    customer_first_name: String
    customer_last_name: String
    customer_email: String
    customer_city: String
    customer_street_address: String
    customer_zipcode: String
    Height: String
    Weight: String
    Allergies: String
    Instagram: String
}  


type Query {
    getCustomer(customer_id: Int!): Customer!
    allCustomers: [CustomerReturn!]!
}

type Mutation {
    createCustomer(input: CustomerInput): Customer!
    updateCustomer(customer_id: Int!, input: CustomerInput): Customer
    deleteCustomer(customer_id: Int!): Customer
}
`;