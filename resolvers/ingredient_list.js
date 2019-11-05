import { sequelize } from "../models";

export default {
    Query: {
        getIngList: (root, {ingredient_list_id}, {models}) => models.IngList.findOne({where: {ingredient_list_id} }),
        async allIngList(root) {return sequelize.query(
            "SELECT ingredient_list_id, ",
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