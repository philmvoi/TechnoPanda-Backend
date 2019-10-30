export default {
    Query: {
        getPackStat: (parent, {package_status_id}, {models}) => models.PackStat.findOne({where: {package_status_id} }),
        allPackStat: (parent, args, {models}) => models.PackStat.findAll()

    },

    Mutation: {
        createPackStat: (parent, args, {models}) => models.PackStat.create(args),
        async updatePackStat(_, { package_status_id, package_status }, {models}) {
            const packStat = await models.PackStat.findByPk(package_status_id);
            await packStat.update({
                package_status,
            });
                return packStat;
            },
    },
};