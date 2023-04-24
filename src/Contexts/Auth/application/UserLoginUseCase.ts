import { HttpError } from '../../Shared/domain/HttpError'
import { type IUseCase } from '../../Shared/domain/IUseCase'
import { type IAuthService } from '../domain/IAuthService'
import { type ISessionRepository } from '../domain/ISessionRepository'
import { type IUserRepasitory } from '../domain/IUserRepository'

export class UserLoginUseCase implements IUseCase<{ email: string, password: string }, { accessToken: string }> {
  constructor (
    private readonly userRepository: IUserRepasitory,
    private readonly sessionRepository: ISessionRepository,
    private readonly authService: IAuthService
  ) { }

  async run (params: { email: string, password: string }): Promise<{ accessToken: string }> {
    const data = {
      email: params.email,
      password: params.password
    }
    const user = await this.userRepository.getUserByEmail(data.email)

    if (user === undefined) throw new HttpError(404, 'Credinciales invalidas')

    const isValid = await this.authService.authenticate(params.password, user.password)

    if (!isValid) throw new HttpError(404, 'Credinciales invalidas')

    const token = this.authService.generateAccessToken(user)
    await this.sessionRepository.saveSession(user.id, token.accessToken)

    return token
  }
}
