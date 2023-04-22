import { type IUseCase } from '../../Shared/domain/IUseCase'
import { type ISessionRepository } from '../domain/ISessionRepository'

export class SessionCreateUseCase implements IUseCase<{ userId: string, token: string }, void> {
  constructor (private readonly repository: ISessionRepository) { }

  async run (params: { userId: string, token: string }): Promise<void> {
    await this.repository.saveSession(params.userId, params.token)
  }
}
