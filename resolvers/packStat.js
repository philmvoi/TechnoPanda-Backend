export default {
    Query: {
        getPackStat: (parent, {package_status_id}, {models}) => models.PackStat.findOne({where: {package_status_id} }),
        allPackStat: (parent, args, {models}) => models.PackStat.findAll()

    },

    Mutation: {
        createPackStat: (parent, args, {models}) => models.PackStat.create(args),
    },
};