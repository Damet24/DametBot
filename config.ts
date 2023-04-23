import dotenv from 'dotenv'
import joi from 'joi'
import { type IConfig } from './src/Contexts/Shared/domain/IConfig'
dotenv.config()

const envVarsSchema = joi.object({
  BOT_TOKEN: joi.string().required(),
  BOT_CLIENT_ID: joi.string().required(),

  JWT_SECRET_KEY: joi.string().required(),

  API_PORT: joi.string().required()

})

const { BOT_TOKEN, BOT_CLIENT_ID, JWT_SECRET_KEY, API_PORT } = process.env
const { error, value: envVars } = envVarsSchema.validate({
  BOT_TOKEN,
  BOT_CLIENT_ID,
  JWT_SECRET_KEY,
  API_PORT
})

if (error != null) {
  throw new Error(`La validación de variables de entorno falló: ${error.message}`)
}

const config: IConfig = {
  bot: {
    token: envVars.BOT_TOKEN,
    clientId: envVars.BOT_CLIENT_ID
  },
  jwt: {
    secret: envVars.JWT_SECRET_KEY
  },
  api: {
    port: envVars.API_PORT,
    hashSalt: 10
  }
}

export default config
