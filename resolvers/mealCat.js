export default {
    Query: {
        getMealCat: (parent, {meal_category_id}, {models}) => models.MealCat.findOne({where: {meal_category_id} }),
        allMealCat: (parent, args, {models}) => models.MealCat.findAll()

    },

    Mutation: {
        createMealCat: (parent, args, {models}) => models.MealCat.create(args),
        async updateMealCat(_, { meal_category_id, description_ }, {models}) {
            const mealCat = await models.MealCat.findByPk(meal_category_id);
            await mealCat.update({
                description_,
            });
                return mealCat;
            },
        deleteMealCat: (parent, {meal_category_id}, {models}) => models.MealCat.destroy({where: {meal_category_id}}),
    
    },
};