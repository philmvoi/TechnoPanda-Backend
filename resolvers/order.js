import { Sequelize } from "sequelize";
const Op = Sequelize.Op;

export default {
    Query: {
        getOrder: (parent, {order_id}, {models}) => models.Order.findOne({where: {order_id} }),
        async allOrders(parent, args, {models}) {  return await models.Order.findAll({ where: {order_status_id: {[Op.notIn]:[1]}}})}

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