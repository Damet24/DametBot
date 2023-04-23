import { type User } from './User'

export interface IAuthService {
  authenticate: (username: string, password: string) => Promise<string>

  validate: (token: string) => Promise<User | undefined>

  generateAccessToken: (data: any) => { accessToken: string }

  encodePassword: (password: string) => string
}
