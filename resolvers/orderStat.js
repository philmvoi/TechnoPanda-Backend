export default {
    Query: {
        getOrderStat: (parent, {order_status_id}, {models}) => models.OrderStat.findOne({where: {order_status_id} }),
        allOrderStat: (parent, args, {models}) => models.OrderStat.findAll()

    },

    Mutation: {
        createOrderStat: (parent, args, {models}) => models.OrderStat.create(args),
    },
};