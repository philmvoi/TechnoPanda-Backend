export default {
    Query: {
        getCustStat: (parent, {customer_status_id}, {models}) => models.CustStat.findOne({where: {customer_status_id} }),
        allCustStat: (parent, args, {models}) => models.CustStat.findAll()

    },

    Mutation: {
        createCustStat: (parent, args, {models}) => models.CustStat.create(args),
        async updateCustStat(_, { customer_status_id, customer_status }, {models}) {
            const custStat = await models.CustStat.findByPk(customer_status_id);
            await custStat.update({
                customer_status,
            });
                return custStat;
            },
    }
};