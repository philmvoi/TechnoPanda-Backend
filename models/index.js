import Sequelize from 'sequelize';

export const sequelize = new Sequelize ('test_csv3', 'root', 'qpalzm10', {
    dialect: 'mysql',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false,
    }
});

const models = {
    //Update Implemented
    CustStat: sequelize.import('./customer_status'),//logical table
    State: sequelize.import('./state'),
    IngStat: sequelize.import('./ingredient_status'),//logical table
    MealCat: sequelize.import('./meal_category'),
    Opm: sequelize.import('./order_payment_method'),
    OrderStat: sequelize.import('./order_status'),//logical table
    PackStat: sequelize.import('./package_status'),//logical table
    PlanType: sequelize.import('./plan_type'),
    ProType: sequelize.import('./protein_type'),
    Ofm: sequelize.import('./order_fulfillment_method'),
    Customer: sequelize.import('./customer'),    
    Order: sequelize.import('./order_'),
    IngList: sequelize.import('./ingredient_list'),
    MealList: sequelize.import('./meal_list'),
    Ingredient: sequelize.import('./ingredient'),
    Meal: sequelize.import('./meal'),
    Orderline: sequelize.import('./order_line'),
    Package: sequelize.import('./package'),
    //Create & Read Implemented
    
    MealStat: sequelize.import('./meal_status'),//logical table
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  export default models;