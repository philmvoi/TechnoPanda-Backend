export default {
    Query: {
        getMealStat: (parent, {meal_status_id}, {models}) => models.MealStat.findOne({where: {meal_status_id} }),
        allMealStat: (parent, args, {models}) => models.MealStat.findAll()

    },

    Mutation: {
        createMealStat: (parent, args, {models}) => models.MealStat.create(args),
        deleteMealStat: (parent, {meal_status_id}, {models}) => models.MealStat.destroy({where: {meal_status_id}}),
        async updateMealStat(_, { meal_status_id, meal_status }, {models}) {
            const mealStat = await models.MealStat.findByPk(meal_status_id);
            await mealStat.update({
                meal_status,
            });
                return mealStat;
            },

    },
};