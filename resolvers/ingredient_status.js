export default {
    Query: {
        getIngStat: (parent, {ingredient_status_id}, {models}) => models.IngStat.findOne({where: {ingredient_status_id} }),
        allIngStat: (parent, args, {models}) => models.IngStat.findAll()

    },

    Mutation: {
        createIngStat: (parent, args, {models}) => models.IngStat.create(args),
        async updateIngStat(_, { ingredient_status_id, ingredient_status }, {models}) {
            const ingStat = await models.IngStat.findByPk(ingredient_status_id);
            await ingStat.update({
                ingredient_status,
            });
                return ingStat;
            },
    },
};