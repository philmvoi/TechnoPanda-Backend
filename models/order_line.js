
export default (sequelize, DataTypes) => {
  const Orderline = sequelize.define('order_line', {
    order_line_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_',
        key: 'order_id'
      }
    },
    package_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'package',
        key: 'package_id'
      }
    },
    order_line_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  });


  Orderline.associate = (models) => {
    Orderline.belongsTo(models.Package, {
      foreignKey: {
        name: 'packageId',
        field: 'package_id',}
    });

    Orderline.belongsTo(models.Order, {
      foreignKey: {
        name: 'OrderId',
        field: 'order_id',}
    });
  };
    return Orderline;
};
