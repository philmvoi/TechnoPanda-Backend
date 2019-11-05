export default (sequelize, DataTypes) => {
  const IngList = sequelize.define('ingredient_list', {
    ingredient_list_id: {
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
    ingredient_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ingredient',
        key: 'ingredient_id'
      }
    }
  }
);

  // IngList.associate = (models) => {
  //   IngList.belongsTo(models.Meal, {
  //     foreignKey: {
  //       name: 'mealId',
  //       field: 'meal_id',}
  //   });
  
  //   IngList.belongsTo(models.Ingredient, {
  //     foreignKey: {
  //       name: 'ingredientId',
  //       field: 'ingredient_id',}
  //   });
    
  // };
  return IngList;
};
