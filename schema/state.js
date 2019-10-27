export default `
type State {
    state_id: Int!
    state_name: String!
}

type Query {
    getState(state_id: Int!): State!
    allStates: [State!]!
}

type Mutation {
    createState(state_name: String!): State!
}
`;