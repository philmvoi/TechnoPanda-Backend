export default `
type Ingredient {
    ingredient_id: Int!
    ingredient_status_id: Int!
    ingredient_name: String!
}

type IngredientReturn{
    ingredient_id: Int!
    ingredient_name: String!
}

input IngredientInput{
    ingredient_status_id: Int
    ingredient_name: String!
}

type Query {
    getIngredient(ingredient_id: Int!): Ingredient!
    allIngredientJoin: [IngredientReturn!]!
}

type Mutation {
    createIngredient(input: IngredientInput): Ingredient!
    updateIngredient(ingredient_id: Int!, input: IngredientInput): Ingredient
}
`;