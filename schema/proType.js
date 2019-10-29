export default `
type ProType {
    protein_type_id: Int!
    protein_type: String!
}

type Query {
    getProType(protein_type_id: Int!): ProType!
    allProType: [ProType!]!
}

type Mutation {
    createProType(protein_type: String!): ProType!
}
`;