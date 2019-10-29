export default {
    Query: {
        getCustStat: (parent, {customer_status_id}, {models}) => models.CustStat.findOne({where: {customer_status_id} }),
        allCustStat: (parent, args, {models}) => models.CustStat.findAll()

    },

    Mutation: {
        createCustStat: (parent, args, {models}) => models.CustStat.create(args),
    },
};