export default `
type PackStat {
    package_status_id: Int
    package_status: String
}

type Query {
    getPackStat(package_status_id: Int!): PackStat!
    allPackStat: [PackStat!]!
}

type Mutation {
    createPackStat(package_status: String!): PackStat!
    updatePackStat(package_status_id: Int, package_status: String): PackStat
    deletePackStat(package_status_id: Int): PackStat
}
`;