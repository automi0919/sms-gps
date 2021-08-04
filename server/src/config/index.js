const env = process.env.NODE_ENV || 'development'
const dotenv = require('dotenv-flow').config().parsed
const database_setting = require('../../database.json');

module.exports = {
  ...dotenv,
  ENV: env,
  APP_PORT: process.env.PORT || dotenv.APP_PORT,
  SOCKET_PORT: process.env.SOCKET_PORT || dotenv.SOCKET_PORT,
  username: database_setting.dev.user,
  password: database_setting.dev.password,
  database: database_setting.dev.database,
  host: database_setting.dev.host,
  dialect: database_setting.dev.driver,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
  logging: true,
}
