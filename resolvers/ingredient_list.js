import models, { sequelize } from "../models";

export default {
    Query: {
        getIngList: (root, {ingredient_list_id}, {models}) => models.IngList.findOne({where: {ingredient_list_id} }),
        async allIngList(root) {return sequelize.query(
            "SELECT ingredient_list_id, il.meal_id, meal_name, il.ingredient_id, ingredient_name FROM ingredient_list il JOIN meal m ON il.meal_id = m.meal_id JOIN ingredient i ON il.ingredient_id = i.ingredient_id ORDER BY ingredient_list_id DESC ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )},
        async popularIngredients(root) {return sequelize.query(
            "select ingredient_name, count(il.ingredient_id) as frequency from ingredient_list as il join ingredient as i on i.ingredient_id = il.ingredient_id group by il.ingredient_id order by frequency desc limit 500;",
          {raw: true, type: sequelize.QueryTypes.SELECT}  
        )},
        async upcomingIngredient(root) {return sequelize.query(
            "select il.meal_id, i.ingredient_name, m.meal_name, m.meal_description, m.additional_protein_oz from ingredient_list as il join meal as m on m.meal_id = il.meal_id join ingredient as i on i.ingredient_id = il.ingredient_id;",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createIngList: (parent, {input}, {models}) => models.IngList.create(input),
        deleteIngList: (parent, {ingredient_list_id}, {models}) => models.IngList.destroy({where: {ingredient_list_id}}),
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