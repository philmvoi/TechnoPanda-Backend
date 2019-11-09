export default `
type Meal {
    meal_id: Int!
    meal_status_id: Int!
    meal_category_id: Int!
    protein_type_id: Int!
    meal_name: String!
    meal_description: String
    additional_protein_oz: String
}

type MealReturn{
    meal_id: Int!
    meal_category_id: Int!
    description_: String
    protein_type_id: Int!
    protein_type: String
    meal_name: String!
    meal_description: String
    additional_protein_oz: String
}

input MealInput{
    meal_status_id: Int
    meal_category_id: Int!
    protein_type_id: Int!
    meal_name: String!
    meal_description: String
    additional_protein_oz: String
}

type Query {
    getMeal(meal_id: Int!): Meal!
    allMeal: [Meal]!
    allMealJoin: [MealReturn]!
}

type Mutation {
    createMeal(input: MealInput): Meal!
    updateMeal(meal_id: Int!, input: MealInput): Meal
    deleteMeal(meal_id: Int!): Meal
}
`;