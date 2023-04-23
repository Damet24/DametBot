
export interface IConfig {
  bot: {
    token: string
    clientId: string
  }
  jwt: {
    secret: string
  }
  api: {
    port: string
    hashSalt: number
  }
}
