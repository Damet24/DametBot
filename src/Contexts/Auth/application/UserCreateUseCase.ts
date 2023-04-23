import { type IUseCase } from '../../Shared/domain/IUseCase'
import { type IAuthService } from '../domain/IAuthService'
import { type IUserRepasitory } from '../domain/IUserRepository'

export class UserCreateUseCase implements IUseCase<{ username: string, email: string, password: string }, { accessToken: string }> {
  constructor (
    private readonly repository: IUserRepasitory,
    private readonly authService: IAuthService) { }

  async run (params: { username: string, email: string, password: string }): Promise<{ accessToken: string }> {
    const data = {
      username: params.username,
      email: params.email,
      password: this.authService.encodePassword(params.password)
    }
    await this.repository.saveUser(data)
    return this.authService.generateAccessToken(params)
  }
}
