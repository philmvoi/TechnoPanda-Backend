

export default (sequelize, DataTypes) => {
  const MealStat = sequelize.define('meal_status', {
    meal_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    meal_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'meal_status'
  });
   return MealStat;
};
