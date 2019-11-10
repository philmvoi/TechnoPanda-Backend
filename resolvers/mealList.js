import { sequelize } from "../models";

export default {
    Query: {
        getMealList: (root, {meal_list_id}, {models}) => models.MealList.findOne({where: {meal_list_id} }),
        async allMealList(root) {return sequelize.query(
            "SELECT meal_list_id, ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async allMlJoin(root) {return sequelize.query(
          "SELECT meal_list_id, ml.meal_id, meal_name, ml.package_id, package_name, meal_list_quantity FROM meal_list ml JOIN meal m ON ml.meal_id = m.meal_id JOIN package p ON ml.package_id = p.package_id  ORDER BY meal_list_id DESC",  
          {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async popularMeal(root) {return sequelize.query(
            "select m.meal_name, count(ml.meal_id) as frequency from meal_list as ml join meal as m on m.meal_id = ml.meal_id group by ml.meal_id order by frequency desc limit 500;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async upcomingMealInfo(root) {return sequelize.query(
            "select ml.meal_id,  p.package_name, p.package_description, m.meal_name, m.meal_description, m.additional_protein_oz from meal_list as ml join meal as m on m.meal_id = ml.meal_id join meal_category as mc on mc.meal_category_id = m.meal_category_id join package as p on p.package_id = ml.package_id;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createMealList: (parent, {input}, {models}) => models.MealList.create(input),
        deleteMealList: (parent, {meal_list_id}, {models}) => models.MealList.destroy({where: {meal_list_id}}),
        async updateMealList(_, {input, meal_list_id}, {models}) {
            const {meal_id,
                    meal_list_quantity} = input;
            const mealList = await models.MealList.findByPk(meal_list_id);
            await mealList.update({
                meal_id,
                meal_list_quantity
            });
            return mealList
        }
    }
};