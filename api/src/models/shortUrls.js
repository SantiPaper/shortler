import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const shortUrls = sequelize.define(
  "shortUrls",
  {
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
  },
  {
    timestamps: true,
  }
);
