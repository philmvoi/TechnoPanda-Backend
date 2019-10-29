export default `
type MealStat {
    meal_status_id: Int!
    meal_status: String!
}

type Query {
    getMealStat(meal_status_id: Int!): MealStat!
    allMealStat: [CustStat!]!
}

type Mutation {
    createMealStat(meal_status: String!): MealStat!
}
`;