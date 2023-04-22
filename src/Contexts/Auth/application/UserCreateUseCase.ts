import { type IUseCase } from '../../Shared/domain/IUseCase'
import { type IUserRepasitory } from '../domain/IUserRepository'

export class UserCreateUseCase implements IUseCase<{ username: string }, void> {
  constructor (private readonly repository: IUserRepasitory) { }

  async run (params: { username: string }): Promise<void> {
    await this.repository.saveUser(params)
  }
}
