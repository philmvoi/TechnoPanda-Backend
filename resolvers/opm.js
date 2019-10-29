export default {
    Query: {
        getOpm: (parent, {corder_payment_method_id}, {models}) => models.Opm.findOne({where: {order_payment_method_id} }),
        allOpm: (parent, args, {models}) => models.Opm.findAll()

    },

    Mutation: {
        createOpm: (parent, args, {models}) => models.Opm.create(args),
    },
};