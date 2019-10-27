
export default (sequelize, DataTypes) => {
  const MealCat = sequelize.define('meal_category', {
    meal_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    description_: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'meal_category'
  });
  return MealCat;
};
