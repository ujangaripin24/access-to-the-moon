import { Sequelize } from "sequelize";

const db = new Sequelize('express_to_the_moon', 'necronomicon',  '123456789', {
    host: "localhost",
    dialect: "postgres",
});

export default db;