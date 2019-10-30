export default {
    Query: {
        getOrderStat: (parent, {order_status_id}, {models}) => models.OrderStat.findOne({where: {order_status_id} }),
        allOrderStat: (parent, args, {models}) => models.OrderStat.findAll()

    },

    Mutation: {
        createOrderStat: (parent, args, {models}) => models.OrderStat.create(args),
        async updateOrderStat(_, { order_status_id, order_status }, {models}) {
            const orderStat = await models.OrderStat.findByPk(order_status_id);
            await orderStat.update({
                order_status,
            });
                return orderStat;
            },
    },
};