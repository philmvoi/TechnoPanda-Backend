export default `
type IngList {
    ingredient_list_id: Int
    meal_id: Int
    ingredient_id: Int
}

type IngListReturn{
    ingredient_list_id: Int!
    meal_id: Int!
    ingredient_id: Int!
    ingredient_name: String
    meal_name: String

}


input IngListInput{
    meal_id: Int
    ingredient_id: Int!
}

type PopularIngredientReport {
    ingredient_name: String!
    frequency: Int!
}

type UpcomingIngredient{
    meal_id: Int!
    ingredient_name: String!
    meal_name: String!
    meal_description: String!
    additional_protein_oz: Int!
}

type Query {
    getIngList(ingredient_list_id: Int!): IngList!
    allIngList: [IngListReturn!]!
    popularIngredients: [PopularIngredientReport]
    upcomingIngredient: [UpcomingIngredient]
}

type Mutation {
    createIngList(input: IngListInput): IngList!
    updateIngList(ingredient_list_id: Int!, input: IngListInput): IngList
    deleteIngList(ingredient_list_id: Int!): IngList
}
`;