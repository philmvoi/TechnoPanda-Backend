export default (sequelize, DataTypes) => {
  const MealList = sequelize.define('meal_list', {
    meal_list_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'meal',
        key: 'meal_id'
      }
    },
    order_line_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_line',
        key: 'order_line_id'
      }
    },
    meal_list_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'meal_list'
  });

  // MealList.associate = (models) => {
  //   MealList.belongsTo(models.Package, {
  //     foreignKey: {
  //       name: 'packageId',
  //       field: 'package_id',}
  //   });

  //   MealList.belongsTo(models.Meal, {
  //     foreignKey: {
  //       name: 'mealId',
  //       field: 'meal_id',}
  //   });
  // };

  return MealList;

};
