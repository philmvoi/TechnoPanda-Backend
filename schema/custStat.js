export default `
type CustStat {
    customer_status_id: Int!
    customer_status: String!
}

type Query {
    getCustStat(customer_status_id: Int!): CustStat!
    allCustStat: [CustStat!]!
}

type Mutation {
    createCustStat(customer_status: String!): CustStat!
    updateCustStat(customer_status_id: Int, customer_status: String): CustStat
}
`;