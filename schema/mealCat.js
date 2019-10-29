export default `
type MealCat {
    meal_category_id: Int!
    description_: String!
}

type Query {
    getMealCat(meal_category_id: Int!): MealCat!
    allMealCat: [MealCat!]!
}

type Mutation {
    createMealCat(description_: String!): MealCat!
}
`;