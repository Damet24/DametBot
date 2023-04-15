import dotenv from 'dotenv'
import joi from 'joi'
dotenv.config()

const envVarsSchema = joi.object({
  BOT_TOKEN: joi.string().required()
})

const { BOT_TOKEN } = process.env
const { error, value: envVars } = envVarsSchema.validate({ BOT_TOKEN })

if (error) {
  throw new Error(`La validación de variables de entorno falló: ${error.message}`)
}

export default {
  bot: {
    token: envVars.BOT_TOKEN
  }
}
