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
  emailAddress: process.env.EMAIL,
  logging: true,
  MAIL_TO: process.env.MAIL_TO,
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_FROM_NAME: process.env.MAIL_FROM_NAME,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
}
