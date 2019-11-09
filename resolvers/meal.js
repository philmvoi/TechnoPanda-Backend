import { sequelize } from "../models";

export default {
    Query: {
        getMeal: (root, {meal_id}, {models}) => models.Meal.findOne({where: {meal_id} }),
        allMeal: (parent, args, {models}) =>  models.Meal.findAll(),
         async allMealJoin(root) {return sequelize.query(
            "SELECT meal_id, meal_name, m.meal_category_id, description_, m.protein_type_id, protein_type, meal_description, additional_protein_oz FROM meal m JOIN protein_type pt ON m.protein_type_id = pt.protein_type_id JOIN meal_category mc ON m.meal_category_id = mc.meal_category_id WHERE meal_status_id = 2 ORDER BY meal_id DESC",
             {raw: true, type: sequelize.QueryTypes.SELECT}
         )}


    },

    Mutation: {
        createMeal: (parent, {input}, {models}) => models.Meal.create(input),
        async updateMeal(_, {input, meal_id}, {models}) {
            const { meal_category_id,
                    protein_type_id,
                    meal_name,
                    meal_description,
                    additional_protein_oz} = input;
            const meal = await models.Meal.findByPk(meal_id);
            await meal.update({
                meal_category_id,
                protein_type_id,
                meal_name,
                meal_description,
                additional_protein_oz
            });
            return meal
        },
        async deleteMeal(_, {meal_id}, {models}) {

            const meal = await models.Meal.findByPk(meal_id);
            await meal.update({
                meal_status_id: 1
            });
            return meal
        },
    }
};
