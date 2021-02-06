import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'postgres'
    }
);

const models = {
    User: sequelize.import('./user'),
    Profile: sequelize.import('./profile'),
}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established succesfully');
    })
    .catch(err => {
        console.error('Unable to connect to the dataBase', err);
    });
export { sequelize };
export default models;