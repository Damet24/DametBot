import { type IConfig } from '../../Shared/domain/IConfig'
import { User } from '../domain/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { type IUserRepasitory } from '../domain/IUserRepository'

export class AuthService {
  constructor (
    private readonly userRepository: IUserRepasitory,
    private readonly config: IConfig
  ) { }

  async authenticate (username: string, password: string): Promise<string> {
    return ''
  }

  async validate (token: string): Promise<User | undefined> {
    const decoded = jwt.verify(token, this.config.jwt.secret)
    console.log(decoded)
    return await this.userRepository.getUserById(new User(null, '', '', '').id)
  }

  generateAccessToken (data: any): { accessToken: string } {
    const accessToken = jwt.sign(data, this.config.jwt.secret)
    return { accessToken }
  }

  encodePassword (password: string): string {
    return bcrypt.hashSync(password, this.config.api.hashSalt)
  }
}
