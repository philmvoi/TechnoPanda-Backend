export default `
type Package {
    package_id: Int!
    package_status_id: Int!
    package_name: String!
    package_description: String
    meal_quantity: Int!
}


input PackageInput{
    package_status_id: Int
    package_name: String!
    package_description: String
    meal_quantity: String!
}

type PackageReturn{
    package_id: Int!
    package_name: String!
    package_description: String
    meal_quantity: Int!
}

type Query {
    getPackage(package_id: Int!): Package!
    allPackage: [PackageReturn!]!
}

type Mutation {
    createPackage(input: PackageInput): PackageReturn!
    updatePackage(package_id: Int!, input: PackageInput): Package
}
`;