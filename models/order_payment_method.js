
export default (sequelize, DataTypes) => {
  const Opm = sequelize.define('order_payment_method', {
    order_payment_method_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_payment_method: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }
);

  return Opm;
};
