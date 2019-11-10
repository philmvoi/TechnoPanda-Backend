export default {
    Query: {
        getOfm: (parent, {order_fulfillment_method_id}, {models}) => models.Ofm.findOne({where: {order_fulfillment_method_id} }),
        allOfm: (parent, args, {models}) => models.Ofm.findAll()

    },

    Mutation: {
        createOfm: (parent, args, {models}) => models.Ofm.create(args),
        async updateOfm(_, { order_fulfillment_method_id, order_fulfillement_method }, {models}) {
            const ofm = await models.Ofm.findByPk(order_fulfillment_method_id);
            await ofm.update({
                order_fulfillement_method,
            });
                return ofm;
            },
        deleteOfm: (parent, {order_fulfillment_method_id}, {models}) => models.Ofm.destroy({where: {order_fulfillment_method_id}}),

    },
};