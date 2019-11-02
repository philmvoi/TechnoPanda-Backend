export default `

type Order {
    order_id: Int!
    customer_id: Int!
    order_status_id: Int!
    order_payment_method_id: Int!
    order_fulfillment_method_id: Int!
    plan_type_id: Int!
    order_received_date: String!
    order_due_date: String!
    order_delivery_street: String
    order_delivery_city: String
    order_delivery_zipcode: String
    order_completed_date: String
    order_deliver_by: String
    order_total_price: Float!
    special_requirements: String
    payment_amount: Float
    customers: Customer!
}

input OrderInput {
    customer_id: Int
    order_status_id: Int
    order_payment_method_id: Int
    order_fulfillment_method_id: Int
    plan_type_id: Int
    order_received_date: String
    order_due_date: String
    order_delivery_street: String
    order_delivery_city: String
    order_delivery_zipcode: String
    order_completed_date: String
    order_deliver_by: String
    order_total_price: Float
    special_requirements: String
    payment_amount: Float
}  


type Query {
    getOrder(order_id: Int!): Order!
    allOrders: [Order]!
}

type Mutation {
    createOrder(input: OrderInput): Order!
    updateOrder(order_id: Int!, input: OrderInput): Order
}
`;