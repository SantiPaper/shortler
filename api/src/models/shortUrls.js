import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const shortUrls = sequelize.define(
  "shortUrls",
  {
    short_url: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    original_url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
