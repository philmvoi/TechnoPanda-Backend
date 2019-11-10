export default `
type OrderLine {
    order_line_id: Int
    order_id: Int
    package_id: Int
    order_line_quantity: Int
    price: String
}

type OrderLineReturn{
    order_line_id: Int!
    order_id: Int!
    package_name: String!
    package_description: String!
    order_line_quantity: Int!
    price: String
    package_id: Int
}

input OrderLineInput{
    order_id: Int
    package_id: Int!
    order_line_quantity: String!
    price: String
}

type Query {
    getOrderLine(order_line_id: Int!): OrderLine!
    allOrderLine: [OrderLineReturn!]!
    allOrderOrderLines: [OrderLineReturn]
}

type Mutation {
    createOrderLine(input: OrderLineInput): OrderLine!
    updateOrderLine(order_line_id: Int!, input: OrderLineInput): OrderLine
    deleteOrderLine(order_line_id: Int!): OrderLine
}
`;