import { HttpError } from '../../Shared/domain/HttpError'
import { type IUseCase } from '../../Shared/domain/IUseCase'
import { type IAuthService } from '../domain/IAuthService'
import { type IUserRepasitory } from '../domain/IUserRepository'

export class UserGetUseCase implements IUseCase<{ email: string, password: string }, { accessToken: string }> {
  constructor (
    private readonly repository: IUserRepasitory,
    private readonly authService: IAuthService) { }

  async run (params: { email: string, password: string }): Promise<{ accessToken: string }> {
    const data = {
      email: params.email,
      password: params.password
    }
    const user = await this.repository.getUserByEmail(data.email)

    if (user === undefined) throw new HttpError(404, 'Credinciales invalidas')
    return this.authService.generateAccessToken(user)
  }
}
