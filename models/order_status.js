/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  const OrderStat = sequelize.define('order_status', {
    order_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }
);

  return OrderStat;
};
