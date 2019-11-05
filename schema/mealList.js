export default `
type MealList {
    meal_list_id: Int!
    meal_id: Int!
    package_id: Int!
    meal_list_quantity: Int!
}

type MealListReturn{
    meal_list_id: Int!
    meal_id: Int!
    package_id: Int!
    meal_list_quantity: Int!
}

input MealListInput{
    meal_id: Int!
    package_id: Int!
    meal_list_quantity: Int!
}

type Query {
    getMealList(meal_list_id: Int!): MealList!
    allMealList: [MealListReturn!]!
}

type Mutation {
    createMealList(input: MealListInput): MealList!
    updateMealList(meal_list_id: Int!, input: MealListInput): MealList
}
`;