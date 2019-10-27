
export default (sequelize, DataTypes) =>  {
  const Ingredient = sequelize.define('ingredient', {
    ingredient_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ingredient_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ingredient_status',
        key: 'ingredient_status_id'
      }
    },
    ingredient_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'ingredient'
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsTo(models.IngStat, {
      foreignKey: {
        name: 'ingredientStatusId',
        field: 'ingredient_status_id',}
    });

    Ingredient.hasMany(models.IngList);

    Ingredients.belongsToMany(models.Meal, {
      through: models.IngList,
      as: 'meals'
    });

  
  }

  return Ingredient;
};
