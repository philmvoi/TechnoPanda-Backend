export default {
    Query: {
        getCustomer: (parent, {customer_id}, {models}) => models.Customer.findOne({where: {customer_id} }),
        async allCustomers(parent, args, {models}) {  return await models.Customer.findAll({ where: {customer_status_id: 1}})}

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

    }

};