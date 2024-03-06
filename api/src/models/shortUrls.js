import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

sequelize.define("shortUrls", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  original_url: {
    type: DataTypes.STRING,
  },
  short_url: {
    type: DataTypes.STRING,
  },
});
