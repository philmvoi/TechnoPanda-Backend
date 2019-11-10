export default `
type Ofm {
    order_fulfillment_method_id: Int
    order_fulfillement_method: String
}

type Query {
    getOfm(order_fulfillment_method_id: Int!): Ofm!
    allOfm: [Ofm!]!
}

type Mutation {
    createOfm(order_fulfillement_method: String!): Ofm!
    updateOfm(order_fulfillment_method_id: Int, order_fulfillement_method: String): Ofm
    deleteOfm(order_fulfillment_method_id: Int!): Ofm
}
`;