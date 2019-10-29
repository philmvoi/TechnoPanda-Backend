export default `
type OrderStat {
    order_status_id: Int!
    order_status: String!
}

type Query {
    getOrderStat(order_status_id: Int!): OrderStat!
    allOrderStat: [OrderStat!]!
}

type Mutation {
    createOrderStat(order_status: String!): OrderStat!
}
`;