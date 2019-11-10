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
        async popularPackage(root) {return sequelize.query(
            "select p.package_name, count(p.package_id) as frequency from order_line as ol join order_ o on o.order_id = ol.order_id join package p on p.package_id = ol.package_id group by p.package_id order by frequency desc limit 500;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async upcomingOrderandPackage(root) {return sequelize.query(
        "select o.order_id, c.customer_first_name, c.customer_last_name, c.customer_phone_number, c.customer_street_address, o.order_due_date, o.order_deliver_by, o.order_total_price, o.special_requirements, opm.order_payment_method, ofm.order_fulfillement_method, pt.plan_type, p.package_name from order_line ol join order_ o on o.order_id = ol.order_id join package p on p.package_id = ol.package_id join customer c on c.customer_id = o.customer_id join plan_type pt on pt.plan_type_id = o.plan_type_id join order_fulfillment_method ofm on ofm.order_fulfillment_method_id = o.order_fulfillment_method_id join order_payment_method opm on opm.order_payment_method_id = o.order_payment_method_id "+
        "where extract(week from order_due_date) != week(current_date);",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}   
    },
    
    Mutation: {
        createOrderLine: (parent, {input}, {models}) => models.Orderline.create(input),
        deleteOrderLine: (parent, {order_line_id}, {models}) => models.Orderline.destroy({where: {order_line_id}}),
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
        },

    }
};
