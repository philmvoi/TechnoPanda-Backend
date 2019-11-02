
export default (sequelize, DataTypes) => {
  const Package = sequelize.define('package', {
    package_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    package_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'package_status',
        key: 'package_status_id'
      }
    },
    package_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    package_description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    meal_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'package'
  });

  Package.associate = (models) => {
    Package.belongsTo(models.PackStat, {
      foreignKey: {
        name: 'packageId',
        field: 'package_id',}
    });

    Package.hasMany(models.Orderline);

    Package.belongsToMany(models.Order, {
      through: models.Orderline,
      as: 'orders',
      foreignKey: 'package_id',
      otherKey: 'order_id'
    });
  };

  return Package;
};
