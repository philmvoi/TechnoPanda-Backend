/* jshint indent: 2 */

export default (sequelize, DataTypes) =>  {
 const Order = sequelize.define('order_', {
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customer_id'
      }
    },
    order_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_status',
        key: 'order_status_id'
      }
    },
    order_payment_method_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_payment_method',
        key: 'order_payment_method_id'
      }
    },
    order_fulfillment_method_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_fulfillment_method',
        key: 'order_fulfillment_method_id'
      }
    },
    plan_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_type',
        key: 'plan_type_id'
      }
    },
    order_received_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    order_due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    order_delivery_street: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_delivery_city: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    order_delivery_zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    order_completed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_deliver_by: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    order_total_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    special_requirements: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'order_'
  });

  // Order.associate = (models) => {
  //   Order.belongsTo(models.Customer, {
  //     foreignKey: 'customer_id',
  //       targetKey: 'customer_id'
  //   });

  //   Order.belongsTo(models.OrderStat, {
  //     foreignKey: {
  //       name: 'orderStatusId',
  //       field: 'order_status_id',}
  //   });

  //   Order.belongsTo(models.Opm, {
  //     foreignKey: {
  //       name: 'orderPaymentMethodId',
  //       field: 'order_payment_method_id',}
  //   });

  //   Order.belongsTo(models.Ofm, {
  //     foreignKey: {
  //       name: 'orderFulfillmentMethodId',
  //       field: 'order_fulfillment_method_id',}
  //   });

  //   Order.belongsTo(models.PlanType, {
  //     foreignKey: {
  //       name: 'planTypeId',
  //       field: 'plan_type_id',}
  //   });

  //   Order.hasMany(models.Orderline, {
  //     foreignKey: 'order_id'
  //   });

  //   Order.belongsToMany(models.Package, {
  //     through: models.Orderline,
  //     as: 'packages',
  //     foreignKey: 'order_id',
  //     otherKey: 'package_id'
  //   });

  // };
  return Order;
};
