import { Sequelize } from "sequelize";
import { sequelize } from "../models/index";
const Op = Sequelize.Op;

export default {
    Query: {
        getOrder: (root, {order_id}, {models}) => models.Order.findOne({where: {order_id} }),
        async allOrders(root) { return sequelize.query(
 "SELECT  order_id, o.customer_id, customer_last_name, customer_phone_number, o.order_status_id, order_status, o.order_payment_method_id, order_payment_method, o.order_fulfillment_method_id, order_fulfillement_method, o.plan_type_id, plan_type, order_received_date, order_due_date, order_delivery_street, order_delivery_city, order_delivery_zipcode, order_completed_date, order_deliver_by, order_total_price, special_requirements, payment_amount FROM order_ o JOIN customer c ON o.customer_id = c.customer_id JOIN order_status os ON o.order_status_id = os.order_status_id JOIN order_payment_method opm ON o.order_payment_method_id = opm.order_payment_method_id JOIN order_fulfillment_method ofm ON o.order_fulfillment_method_id = ofm.order_fulfillment_method_id JOIN plan_type pt ON o.plan_type_id = pt.plan_type_id  WHERE (o.order_status_id != 1)",
                        {raw: true, type: sequelize.QueryTypes.SELECT}
                    )}

    },

    Mutation: {
        createOrder: (parent, {input}, {models}) => models.Order.create(input),
        async updateOrder(_, { input, order_id }, {models}) {
            const {customer_id,
                order_status_id,
                order_payment_method_id,
                order_fulfillment_method_id,
                plan_type_id,
                order_received_date,
                order_due_date,
                order_delivery_street,
                order_delivery_city,
                order_delivery_zipcode,
                order_completed_date,
                order_deliver_by,
                order_total_price,
                special_requirements,
                payment_amount} = input;

            const order = await models.Order.findByPk(order_id);
            await order.update({
                customer_id,
                order_status_id,
                order_payment_method_id,
                order_fulfillment_method_id,
                plan_type_id,
                order_received_date,
                order_due_date,
                order_delivery_street,
                order_delivery_city,
                order_delivery_zipcode,
                order_completed_date,
                order_deliver_by,
                order_total_price,
                special_requirements,
                payment_amount
            });
                return order;
            },

    }

};