import { type IConfig } from '../../Shared/domain/IConfig'
import { User } from '../domain/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class AuthService {
  constructor (private readonly config: IConfig) { }
  async authenticate (username: string, password: string): Promise<string> {
    return ''
  }

  async validate (token: string): Promise<User | undefined> {
    return new User(null, '', '', '')
  }

  generateAccessToken (data: any): { accessToken: string } {
    const accessToken = jwt.sign(data, this.config.jwt.secret)
    return { accessToken }
  }

  encodePassword (password: string): string {
    return bcrypt.hashSync(password, this.config.api.hashSalt)
  }
}
