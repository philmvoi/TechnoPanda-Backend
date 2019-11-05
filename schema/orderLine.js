export default `
type OrderLine {
    order_line_id: Int!
    order_id: Int!
    package_id: Int!
    order_line_quantity: Int!
    price: String
}

type OrderLineReturn{
    order_line_id: Int!
    order_id: Int!
    package_id: Int!
    order_line_quantity: Int!
    price: String
}

input OrderLineInput{
    order_id: Int!
    package_id: Int!
    order_line_quantity: Int!
    price: String
}

type Query {
    getOrderLine(order_line_id: Int!): OrderLine!
    allOrderLine: [OrderLineReturn!]!
}

type Mutation {
    createOrderLine(input: OrderLineInput): OrderLine!
    updateOrderLine(order_line_id: Int!, input: OrderLineInput): OrderLine
}
`;