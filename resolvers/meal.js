import { sequelize } from "../models";

export default {
    Query: {
        getMeal: (root, {meal_id}, {models}) => models.Meal.findOne({where: {meal_id} }),
        allMeal: (parent, args, {models}) =>  models.Meal.findAll(),
        // async allMeal(root) {return sequelize.query(
        //     "SELECT meal_id, ",
        //     {raw: true, type: sequelize.QueryTypes.SELECT}
        // )}

    },

    Mutation: {
        createMeal: (parent, {input}, {models}) => models.Meal.create(input),
        async updateMeal(_, {input, meal_id}, {models}) {
            const {meal_status_id,
                    meal_category_id,
                    protein_type_id,
                    meal_name,
                    meal_description,
                    additional_protein_oz} = input;
            const meal = await models.Meal.findByPk(meal_id);
            await meal.update({
                meal_status_id,
                meal_category_id,
                protein_type_id,
                meal_name,
                meal_description,
                additional_protein_oz
            });
            return meal
        }
    }
};