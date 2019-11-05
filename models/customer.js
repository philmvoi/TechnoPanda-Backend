export default (sequelize, DataTypes) => {
  const Customer =  sequelize.define('customer', {
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'state',
        key: 'state_id'
      }
    },
    customer_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customer_status',
        key: 'customer_status_id'
      }
    },
    customer_phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    customer_first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    customer_last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    customer_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customer_city: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customer_street_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_zipcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Height: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Allergies: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Instagram: {
      type: DataTypes.STRING(25),
      allowNull: true
    }

  
  });

  // Customer.associate = (models) => {
  //   Customer.belongsTo(models.CustStat, {
  //     foreignKey: {
  //       name: 'customerStatusId',
  //       field: 'customer_status_id',}
  //   });
  
  //   Customer.belongsTo(models.State, {
  //     foreignKey: {
  //       name: 'stateId',
  //       field:'state_id',}
  //   });
  
  //   Customer.hasMany(models.Order, {
  //     foreignKey: 'customer_id'
  //   });
  // };

  return Customer;
};


