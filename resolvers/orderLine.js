import { sequelize } from "../models";

export default {
    Query: {
        getOrderLine: (root, {order_line_id}, {models}) => models.Orderline.findOne({where: {order_line_id} }),
        async allOrderLine(root) {return sequelize.query(
            "SELECT order_line_id, ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createOrderLine: (parent, {input}, {models}) => models.Orderline.create(input),
        async updateOrderLine(_, {input, order_line_id}, {models}) {
            const {order_id,
                    package_id,
                    order_line_quantity,
                    price} = input;
            const orderLine = await models.Orderline.findByPk(order_line_id);
            await orderLine.update({
                order_id,
                package_id,
                order_line_quantity,
                price
            });
            return orderLine
        }
    }
};