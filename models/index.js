import Sequelize from 'sequelize';

const sequelize = new Sequelize ('capstone_schema', 'root', 'qpalzm10', {
    dialect: 'mysql',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false,
    }
});

const models = {
    //Create & Read Implemented
    CustStat: sequelize.import('./customer_status'),
    State: sequelize.import('./state'),
    Customer: sequelize.import('./customer'),
    IngStat: sequelize.import('./ingredient_status'),
    MealCat: sequelize.import('./meal_category'),
    MealStat: sequelize.import('./meal_status'),
    Opm: sequelize.import('./order_payment_method'),
    OrderStat: sequelize.import('./order_status'),
    PackStat: sequelize.import('./package_status'),
    PlanType: sequelize.import('./plan_type'),
    ProType: sequelize.import('./protein_type'),
    Ofm: sequelize.import('./order_fulfillment_method'),

    //Not Implemented
    // IngList: sequelize.import('./ingredient_list'),
    // MealList: sequelize.import('./meal_list'),
    // Ingredient: sequelize.import('./ingredient'),
    // Meal: sequelize.import('./meal'),
    // Order: sequelize.import('./order_'),
    // OrderLine: sequelize.import('./order_line'),
    // Package: sequelize.import('./package'),
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  export default models;