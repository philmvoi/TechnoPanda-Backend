
export default (sequelize, DataTypes) => {
  const State = sequelize.define('state', {
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    state_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });
  return State;
};
