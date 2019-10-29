export default {
    Query: {
        getPlanType: (parent, {plan_type_id}, {models}) => models.PlanType.findOne({where: {plan_type_id} }),
        allPlanType: (parent, args, {models}) => models.PlanType.findAll()

    },

    Mutation: {
        createPlanType: (parent, args, {models}) => models.PlanType.create(args),
    },
};