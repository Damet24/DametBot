import { type IConfig } from '../../Shared/domain/IConfig'
import { User } from '../domain/User'
import jwt from 'jsonwebtoken'

export class AuthService {
  constructor (private readonly config: IConfig) { }
  async authenticate (username: string, password: string): Promise<string> {
    return ''
  }

  async validate (token: string): Promise<User | undefined> {
    return new User(null, '', '', '')
  }

  async generateAccessToken (data: any): Promise<{ accessToken: string }> {
    const accessToken = jwt.sign(data, this.config.jwt.secret)
    return { accessToken }
  }
}
