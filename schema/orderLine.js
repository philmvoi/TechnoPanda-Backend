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

type PopularPackage{
    package_name: String!
    frequency: Int!
}

type UpcomingOrderandPackage {
    order_id: Int
    customer_first_name: String
    customer_last_name: String
    customer_phone_number: String
    order_due_date: String
    order_delivery_street: String
    order_delivery_city: String
    order_delivery_zipcode: String
    order_total_price: Float
    special_requirements: String
    order_payment_method: String
    order_fulfillement_method: String
    plan_type: String
}

type Query {
    getOrderLine(order_line_id: Int!): OrderLine!
    allOrderLine: [OrderLineReturn!]!
    allOrderOrderLines: [OrderLineReturn]
    popularPackage: [PopularPackage]
    upcomingOrderandPackage: [UpcomingOrderandPackage!]!
}

type Mutation {
    createOrderLine(input: OrderLineInput): OrderLine!
    updateOrderLine(order_line_id: Int!, input: OrderLineInput): OrderLine
    deleteOrderLine(order_line_id: Int!): OrderLine
}
`;