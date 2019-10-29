export default `
type Opm {
    order_payment_method_id: Int!
    order_payment_method: String!
}

type Query {
    getOpm(order_payment_method_id: Int!): Opm!
    allOpm: [Opm!]!
}

type Mutation {
    createOpm(order_payment_method: String!): Opm!
}
`;