
export default (sequelize, DataTypes) => {
  const PlanType = sequelize.define('plan_type', {
    plan_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    plan_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }
);

  return PlanType;
};
