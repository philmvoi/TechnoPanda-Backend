export default {
    Query: {
        getProType: (parent, {protein_type_id}, {models}) => models.ProType.findOne({where: {protein_type_id} }),
        allProType: (parent, args, {models}) => models.ProType.findAll()

    },

    Mutation: {
        createProType: (parent, args, {models}) => models.ProType.create(args),
    },
};