export default {
    Query: {
        getMealStat: (parent, {meal_status_id}, {models}) => models.MealStat.findOne({where: {meal_status_id} }),
        allMealStat: (parent, args, {models}) => models.MealStat.findAll()

    },

    Mutation: {
        createMealStat: (parent, args, {models}) => models.MealStat.create(args),
    },
};