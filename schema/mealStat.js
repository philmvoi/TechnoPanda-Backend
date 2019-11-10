export default `
type MealStat {
    meal_status_id: Int
    meal_status: String
}

type Query {
    getMealStat(meal_status_id: Int!): MealStat!
    allMealStat: [MealStat!]!
}

type Mutation {
    createMealStat(meal_status: String!): MealStat!
    updateMealStat(meal_status_id: Int!, meal_status: String!): MealStat!
    deleteMealStat(meal_status_id: Int!): MealStat
}
`;