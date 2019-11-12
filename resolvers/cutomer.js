import { sequelize } from "../models/index";

export default {
    Query: {
        getCustomer: (root, {customer_id}, {models}) => models.Customer.findOne({where: {customer_id} }),
        async allCustomers(root) { return sequelize.query(
"SELECT customer_id, c.state_id, state_name, customer_phone_number, customer_first_name, customer_last_name, customer_email, customer_city, customer_street_address, customer_zipcode, Height, Weight, Allergies, Instagram FROM customer c join state s ON c.state_id = s.state_id WHERE (c.customer_status_id = 2)",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}
       
    },

    Mutation: {
        createCustomer: (parent, {input}, {models}) => models.Customer.create(input),
        async updateCustomer(_, { input, customer_id }, {models}) {
            const {state_id,
                    customer_status_id,
                    customer_phone_number,
                    customer_first_name,
                    customer_last_name,
                    customer_email,
                    customer_city,
                    customer_street_address,
                    customer_zipcode,
                    Height,
                    Weight,
                    Allergies,
                    Instagram} = input;
            const customer = await models.Customer.findByPk(customer_id);
            await customer.update({
                state_id,
                customer_status_id,
                customer_phone_number,
                customer_first_name,
                customer_last_name,
                customer_email,
                customer_city,
                customer_street_address,
                customer_zipcode,
                Height,
                Weight,
                Allergies,
                Instagram,
            });
                return customer;
            },
            async deleteCustomer(_, { customer_id }, {models}) {
                const customer = await models.Customer.findByPk(customer_id);
                await customer.update({
                    customer_status_id: 1,
                });
                    return customer;
                },
    }
};
