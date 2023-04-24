import { type User } from './User'

export interface IAuthService {
  authenticate: (password: string, passwordHash: string) => Promise<boolean>

  validate: (token: string) => Promise<User | undefined>

  generateAccessToken: (data: any) => { accessToken: string }

  encodePassword: (password: string) => string
}
