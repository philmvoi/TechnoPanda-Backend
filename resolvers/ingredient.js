import { sequelize } from "../models";

export default {
    Query: {
        getIngredient: (root, {ingredient_id}, {models}) => models.Ingredient.findOne({where: {ingredient_id} }),
        async allIngredientJoin(root) {return sequelize.query(
            "SELECT ingredient_id, ingredient_name FROM ingredient WHERE ingredient_status_id = 2 ORDER BY ingredient_id DESC",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}

    },

    Mutation: {
        createIngredient: (parent, {input}, {models}) => models.Ingredient.create(input),
        async updateIngredient(_, {input, ingredient_id}, {models}) {
            const {ingredient_name} = input;
            const ingredient = await models.Ingredient.findByPk(ingredient_id);
            await ingredient.update({
                ingredient_name
            });
            return ingredient
        },
        async deleteIngredient(_, { ingredient_id}, {models}) {
            const ingredient = await models.Ingredient.findByPk(ingredient_id);
            await ingredient.update({
                ingredient_status_id: 1
            });
            return ingredient
        }
    }
};

