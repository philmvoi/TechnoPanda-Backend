export default `
type MealList {
    meal_list_id: Int
    meal_id: Int
    order_line_id: Int
    meal_list_quantity: Int
}

type MealListReturn{
    meal_list_id: Int!
    meal_id: Int!
    order_id: Int
    order_line_id: Int
    package_id: Int
    package_name: String
    meal_name: String
    meal_list_quantity: String
}

input MealListInput{
    meal_id: Int!
    order_line_id: Int
    meal_list_quantity: String!
}

type PopularMealReport {
    meal_name: String!
    frequency: Int!
}

type UpcomingMealInfo{
    order_id: Int
    package_name: String
    meal_name: String
    protein_type: String
    description_: String
    meal_description: String
    additional_protein_oz: Int
    order_due_date: String
}

type Query {
    getMealList(meal_list_id: Int!): MealList!
    allMealList: [MealList!]!
    allMlJoin: [MealListReturn]!
    popularMeal: [PopularMealReport]
    upcomingMealInfo: [UpcomingMealInfo] 
}

type Mutation {
    createMealList(input: MealListInput): MealList!
    updateMealList(meal_list_id: Int!, input: MealListInput): MealList
    deleteMealList(meal_list_id: Int!): MealList
}
`;