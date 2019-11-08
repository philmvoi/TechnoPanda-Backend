export default `
type Meal {
    meal_id: Int!
    meal_status_id: Int!
    meal_category_id: Int!
    protein_type_id: Int!
    meal_name: String!
    meal_description: String
    additional_protein_oz: Int
}

type MealReturn{
    meal_id: Int!
    meal_status_id: Int!
    meal_category_id: Int!
    protein_type_id: Int!
    meal_name: String!
    meal_description: String
    additional_protein_oz: Int
}

input MealInput{
    meal_status_id: Int!
    meal_category_id: Int!
    protein_type_id: Int!
    meal_name: String!
    meal_description: String
    additional_protein_oz: Int
}

type Query {
    getMeal(meal_id: Int!): Meal!
    allMeal: [Meal]!
}

type Mutation {
    createMeal(input: MealInput): Meal!
    updateMeal(meal_id: Int!, input: MealInput): Meal
}
`;