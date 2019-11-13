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
    special_requirements: String
    payment_amount: Float
}

type OrderReturn {
    order_id: Int
    customer_id: Int
    customer_last_name: String
    customer_first_name: String
    customer_phone_number: String
    order_status_id: Int
    order_status: String
    order_payment_method_id: Int
    order_payment_method: String
    order_fulfillment_method_id: Int
    order_fulfillement_method: String
    plan_type_id: Int!
    plan_type: String
    order_received_date: String
    order_due_date: String
    order_delivery_street: String
    order_delivery_city: String
    order_delivery_zipcode: String
    order_completed_date: String
    order_deliver_by: String
    special_requirements: String
    payment_amount: String
    ol_price: String
    

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
    special_requirements: String
    payment_amount: String
}  

type LoyalCustomer{
    customer_last_name: String!
    customer_first_name: String!
    customer_id: Int!
    frequency: Int!
}

type RevenueCurrentMonth {
    Current_Year: String
    Current_Month: String
    Total_Revenue_this_Month: String
}

type RevenueLastMonth{
    Prev_Year: String!
    Previous_Month: String!
    Total_Revenue_in_Previous_Month: String!
}

type Query {
    getOrder(order_id: Int!): Order!
    allOrders: [OrderReturn]!
    loyalCustomer: [LoyalCustomer]
    revenueCurrentMonth: [RevenueCurrentMonth]
    revenueLastMonth: [RevenueLastMonth]
}

type Mutation {
    createOrder(input: OrderInput): Order!
    updateOrder(order_id: Int!, input: OrderInput): Order
    deleteOrder(order_id: Int!): Order
}
`;