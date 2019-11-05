import { sequelize } from "../models";

export default {
    Query: {
        getIngredient: (root, {ingredient_id}, {models}) => models.Ingredient.findOne({where: {ingredient_id} }),
        async allIngredient(root) {return sequelize.query(
            "SELECT ingredient_id, ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createIngredient: (parent, {input}, {models}) => models.Ingredient.create(input),
        async updateIngredient(_, {input, ingredient_id}, {models}) {
            const {ingredient_status_id,
                    ingredient_name} = input;
            const ingredient = await models.Ingredient.findByPk(ingredient_id);
            await ingredient.update({
                ingredient_status_id,
                ingredient_name
            });
            return ingredient
        }
    }
};