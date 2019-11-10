export default {
    Query: {
        getPlanType: (parent, {plan_type_id}, {models}) => models.PlanType.findOne({where: {plan_type_id} }),
        allPlanType: (parent, args, {models}) => models.PlanType.findAll()

    },

    Mutation: {
        createPlanType: (parent, args, {models}) => models.PlanType.create(args),
        async updatePlanType(_, { plan_type_id, plan_type }, {models}) {
            const planType = await models.PlanType.findByPk(plan_type_id);
            await planType.update({
                plan_type,
            });
                return planType;
            },
        deletePlan: (parent, {plan_type_id}, {models}) => models.PlanType.destroy({where: {plan_type_id}}),
   
    },
};