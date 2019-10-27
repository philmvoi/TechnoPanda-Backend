
export default (sequelize, DataTypes) => {
  const PackStat = sequelize.define('package_status', {
    package_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    package_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'package_status'
  });
   return PackStat;
};
