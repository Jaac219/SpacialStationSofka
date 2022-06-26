require("dotenv").config();
const { Sequelize } = require('sequelize');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const modelSpaceCraft = require("./models/SpaceCraft.js");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}` || process.env.DATABASE_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false
  //   }
  // }
});

const SpaceCraft = modelSpaceCraft(sequelize);

module.exports = {
  conn: sequelize,
  SpaceCraft
}
