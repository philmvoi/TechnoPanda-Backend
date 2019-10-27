
export default (sequelize, DataTypes) => {
  const CustStat = sequelize.define('customer_status', {
    customer_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    customer_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
  } 
);

  return CustStat;
};

