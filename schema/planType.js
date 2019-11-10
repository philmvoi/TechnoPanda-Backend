export default `
type PlanType {
    plan_type_id: Int
    plan_type: String
}

type Query {
    getPlanType(plan_type_id: Int!): PlanType!
    allPlanType: [PlanType!]!
}

type Mutation {
    createPlanType(plan_type: String!): PlanType!
    updatePlanType(plan_type_id: Int, plan_type: String): PlanType
    deletePlan(plan_type_id: Int!): PlanType
}
`;