export default `
type IngStat {
    ingredient_status_id: Int
    ingredient_status: String
}

type Query {
    getIngStat(ingredient_status_id: Int!): IngStat!
    allIngStat: [IngStat!]!
}

type Mutation {
    createIngStat(ingredient_status: String!): IngStat!
    updateIngStat(ingredient_status_id: Int!, ingredient_status: String): IngStat
    deleteIngStat(ingredient_status_id: Int!): IngStat
}
`;