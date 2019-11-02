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
    //Update Implemented
    CustStat: sequelize.import('./customer_status'),
    State: sequelize.import('./state'),
    IngStat: sequelize.import('./ingredient_status'),
    MealCat: sequelize.import('./meal_category'),
    Opm: sequelize.import('./order_payment_method'),
    OrderStat: sequelize.import('./order_status'),
    PackStat: sequelize.import('./package_status'),
    PlanType: sequelize.import('./plan_type'),
    ProType: sequelize.import('./protein_type'),
    Ofm: sequelize.import('./order_fulfillment_method'),
    Customer: sequelize.import('./customer'),    
    Order: sequelize.import('./order_'),

    //Create & Read Implemented
    
    MealStat: sequelize.import('./meal_status'),

    //Not Implemented

    
    // IngList: sequelize.import('./ingredient_list'),
    // MealList: sequelize.import('./meal_list'),
    // Ingredient: sequelize.import('./ingredient'),
    // Meal: sequelize.import('./meal'),
    
    Orderline: sequelize.import('./order_line'),
    Package: sequelize.import('./package'),
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  export default models;