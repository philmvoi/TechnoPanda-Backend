import Sequelize from 'sequelize';

const sequelize = new Sequelize ('technopanda', 'root', 'Quietzone2018!', {
    dialect: 'mysql',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false,
    }
});

const models = {
    CustStat: sequelize.import('./customer_status'),
    State: sequelize.import('./state'),
    Customer: sequelize.import('./customer'),
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  export default models;