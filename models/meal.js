
export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    meal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    meal_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'meal_status',
        key: 'meal_status_id'
      }
    },
    meal_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'meal_category',
        key: 'meal_category_id'
      }
    },
    protein_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'protein_type',
        key: 'protein_type_id'
      }
    },
    meal_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    meal_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    additional_protein_oz: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'meal'
  });

  Meal.associate = (models) => {
    Meal.belongsTo(models.MealStat, {
      foreignKey: {
        name: 'mealStatusId',
        field: 'meal_status_id',}
    });

    Meal.belongsTo(models.MealCat, {
      foreignKey: {
        name: 'mealCategoryId',
        field: 'meal_category_id',}
    });

    Meal.belongsTo(models.ProType, {
      foreignKey: {
        name: 'proteinTypeId',
        field: 'protein_type_id',}
    });

    Meal.hasMany(models.IngList);
  };

  Meal.belongsToMany(models.Ingredient, {
    through: models.IngList,
    as: 'ingredients'
  });

  return Meal;
};
