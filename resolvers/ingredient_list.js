import { sequelize } from "../models";

export default {
    Query: {
        getIngList: (root, {ingredient_list_id}, {models}) => models.IngList.findOne({where: {ingredient_list_id} }),
        async allIngList(root) {return sequelize.query(
            "SELECT ingredient_list_id, il.meal_id, meal_name, il.ingredient_id, ingredient_name FROM ingredient_list il JOIN meal m ON il.meal_id = m.meal_id JOIN ingredient i ON il.ingredient_id = i.ingredient_id ORDER BY ingredient_list_id DESC ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createIngList: (parent, {input}, {models}) => models.IngList.create(input),
        async updateIngList(_, {input, ingredient_list_id}, {models}) {
            const {ingredient_id,
                    meal_id} = input;
            const ingList = await models.IngList.findByPk(ingredient_list_id);
            await ingList.update({
                meal_id,
                ingredient_id
            });
            return ingList
        }
    }
};