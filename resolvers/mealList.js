import { sequelize } from "../models";

export default {
    Query: {
        getMealList: (root, {meal_list_id}, {models}) => models.MealList.findOne({where: {meal_list_id} }),
        async allMealList(root) {return sequelize.query(
            "SELECT meal_list_id, ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createMealList: (parent, {input}, {models}) => models.MealList.create(input),
        async updateMealList(_, {input, meal_list_id}, {models}) {
            const {meal_id,
                    package_id,
                    meal_list_quantity} = input;
            const mealList = await models.MealList.findByPk(meal_list_id);
            await mealList.update({
                meal_id,
                package_id,
                meal_list_quantity
            });
            return mealList
        }
    }
};