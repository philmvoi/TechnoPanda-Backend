export default {
    Query: {
        getOfm: (parent, {order_fulfillment_method_id}, {models}) => models.Ofm.findOne({where: {order_fulfillment_method_id} }),
        allOfm: (parent, args, {models}) => models.Ofm.findAll()

    },

    Mutation: {
        createOfm: (parent, args, {models}) => models.Ofm.create(args),
    },
};