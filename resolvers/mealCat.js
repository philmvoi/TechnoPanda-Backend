export default {
    Query: {
        getMealCat: (parent, {meal_category_id}, {models}) => models.MealCat.findOne({where: {meal_category_id} }),
        allMealCat: (parent, args, {models}) => models.MealCat.findAll()

    },

    Mutation: {
        createMealCat: (parent, args, {models}) => models.MealCat.create(args),
    },
};