import dotenv from 'dotenv'
dotenv.config()

export default {
  bot: {
    token: process.env.BOT_TOKEN ?? ""
  }
}
