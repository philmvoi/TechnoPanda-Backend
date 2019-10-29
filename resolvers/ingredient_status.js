export default {
    Query: {
        getIngStat: (parent, {ingredient_status_id}, {models}) => models.IngStat.findOne({where: {ingredient_status_id} }),
        allIngStat: (parent, args, {models}) => models.IngStat.findAll()

    },

    Mutation: {
        createIngStat: (parent, args, {models}) => models.IngStat.create(args),
    },
};