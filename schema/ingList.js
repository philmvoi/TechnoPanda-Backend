export default `
type IngList {
    ingredient_list_id: Int!
    meal_id: Int!
    ingredient_id: Int!
}

type IngListReturn{
    ingredient_list_id: Int!
    meal_id: Int!
    ingredient_id: Int!
}

input IngListInput{
    meal_id: Int!
    ingredient_id: Int!
}

type Query {
    getIngList(ingredient_list_id: Int!): IngList!
    allIngList: [IngListReturn!]!
}

type Mutation {
    createIngList(input: IngListInput): IngList!
    updateIngList(ingredient_list_id: Int!, input: IngListInput): IngList
}
`;