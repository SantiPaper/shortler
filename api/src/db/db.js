import Sequelize from "sequelize";
import "dotenv/config";

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});
