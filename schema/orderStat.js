export default `
type OrderStat {
    order_status_id: Int
    order_status: String
}

type OrderStatReturn {
    order_status_id: Int!
    order_status: String!
}
type Query {
    getOrderStat(order_status_id: Int!): OrderStat!
    allOrderStat: [OrderStatReturn]!
}

type Mutation {
    createOrderStat(order_status: String!): OrderStat!
    updateOrderStat(order_status_id: Int, order_status: String): OrderStat
    deleteOrderStat(order_status_id: Int!): OrderStat
}
`;