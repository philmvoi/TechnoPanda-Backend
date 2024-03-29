export default (sequelize, DataTypes) => {
  const Ofm = sequelize.define('order_fulfillment_method', {
    order_fulfillment_method_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_fulfillement_method: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }
);

  return Ofm;
};
