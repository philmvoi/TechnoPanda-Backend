
export default (sequelize, DataTypes) => {
  const IngStat = sequelize.define('ingredient_status', {
    ingredient_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ingredient_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });

  return IngStat;
};
