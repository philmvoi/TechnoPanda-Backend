import { sequelize } from "../models";

export default {
    Query: {
        getOrderLine: (root, {order_line_id}, {models}) => models.Orderline.findOne({where: {order_line_id} }),
        async allOrderLine(root) {return sequelize.query(
            "SELECT order_line_id, ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}, 
        async allOrderOrderLines(root) {return sequelize.query(
            "SELECT order_line_id, ol.order_id, ol.package_id, package_name, package_description, order_line_quantity, price FROM order_line ol JOIN order_ o ON ol.order_id = o.order_id JOIN package p ON ol.package_id = p.package_id ORDER BY order_line_id DESC",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},   
    },
    
    Mutation: {
        createOrderLine: (parent, {input}, {models}) => models.Orderline.create(input),
        async updateOrderLine(_, {input, order_line_id}, {models}) {
            const {
                    package_id,
                    order_line_quantity,
                    price} = input;
            const orderLine = await models.Orderline.findByPk(order_line_id);
            await orderLine.update({
                package_id,
                order_line_quantity,
                price
            });
            return orderLine
        }
    }
};