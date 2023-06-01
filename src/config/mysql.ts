import "dotenv/config";
import { Sequelize } from "sequelize";

const database = <string>process.env.DATABASE_NAME;
const username = <string>process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWD;
const host = process.env.DATABASE_HOST;
const port = parseInt(<string>process.env.DATABASE_PORT);


const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'mysql'
});

export default sequelize;