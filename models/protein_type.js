
export default (sequelize, DataTypes) => {
  const ProType = sequelize.define('protein_type', {
    protein_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    protein_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'protein_type'
  });

  return ProType;
};
