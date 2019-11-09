import { sequelize } from "../models";

export default {
    Query: {
        getPackage: (root, {package_id}, {models}) => models.Package.findOne({where: {package_id} }),
        async allPackage(root) {return sequelize.query(
            "SELECT package_id, package_name, package_description, meal_quantity FROM package WHERE package_status_id= 2 ORDER BY package_id DESC ",
            {raw: true, type: sequelize.QueryTypes.SELECT}
        )}
 

    },

    Mutation: {
        createPackage: (parent, {input}, {models}) => models.Package.create(input),
        async updatePackage(_, {input, package_id}, {models}) {
            const {package_status_id,
                    package_name,
                    package_description,
                    meal_quantity} = input;
            const pckage = await models.Package.findByPk(package_id);
            await pckage.update({
                package_status_id,
                package_name,
                package_description,
                meal_quantity
            });
            return pckage
        }
    }
};