import { sequelize } from "../models/index";
export default {
    Query: {
        getOrderStat: (parent, {order_status_id}, {models}) => models.OrderStat.findOne({where: {order_status_id} }),
        async allOrderStat(root) {return sequelize.query(
            "SELECT order_status_id, order_status FROM order_status WHERE order_status_id <> 1",
             {raw: true, type: sequelize.QueryTypes.SELECT}
         )}
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