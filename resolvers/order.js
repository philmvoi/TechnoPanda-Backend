import { Sequelize } from "sequelize";
import { sequelize } from "../models/index";
const Op = Sequelize.Op;

export default {
    Query: {
        getOrder: (root, {order_id}, {models}) => models.Order.findOne({where: {order_id} }),
        async allOrders(root) { return sequelize.query(
            "SELECT o.order_id, o.customer_id, customer_first_name, customer_last_name, customer_phone_number, o.order_status_id, order_status, o.order_payment_method_id, order_payment_method, o.order_fulfillment_method_id, order_fulfillement_method, o.plan_type_id, plan_type, order_received_date, order_due_date, order_delivery_street, order_delivery_city, order_delivery_zipcode, order_completed_date, order_deliver_by, order_total_price, special_requirements, payment_amount, SUM(ol.price) as ol_price FROM order_ o LEFT OUTER JOIN order_line ol ON ol.order_id = o.order_id JOIN customer c ON o.customer_id = c.customer_id JOIN order_status os ON o.order_status_id = os.order_status_id JOIN order_payment_method opm ON o.order_payment_method_id = opm.order_payment_method_id JOIN order_fulfillment_method ofm ON o.order_fulfillment_method_id = ofm.order_fulfillment_method_id JOIN plan_type pt ON o.plan_type_id = pt.plan_type_id  WHERE (o.order_status_id != 1) GROUP BY o.order_id",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async loyalCustomer(root) { return sequelize.query(
            "select c.customer_last_name, c.customer_first_name, o.customer_id, count(o.customer_id) as frequency from order_ as o join customer as c on o.customer_id = c.customer_id WHERE customer_status_id = 2 group by customer_id order by frequency desc limit 500;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async revenueCurrentMonth(root) {return sequelize.query(
            "select extract(year from order_completed_date) as Current_Year, extract(month from order_completed_date) as Current_Month, sum(payment_amount) as 'Total_Revenue_this_Month' from order_ where order_status_id=2 AND extract(year from order_completed_date) = year(current_date) AND extract(month from order_completed_date) = month(current_date) GROUP BY Current_Year, Current_Month;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async revenueLastMonth(root) {return sequelize.query(
            "select extract(year from order_completed_date) as Prev_Year, extract(month from order_completed_date) as Previous_Month, SUM(payment_amount) as Total_Revenue_in_Previous_Month from order_ where order_status_id=2 AND extract(year from order_completed_date) = year(current_date - interval 1 month) AND extract(month from order_completed_date) = month(current_date - interval 1 month) GROUP BY Prev_Year, Previous_Month;",
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
            async deleteOrder(_, {order_id}, {models}) {
    
                const order = await models.Order.findByPk(order_id);
                await order.update({
                    order_status_id: 1
                });
                    return order;
                },

    }

};

