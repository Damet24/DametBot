import { IUseCase } from "../../Shared/domain/IUseCase";
import { ISessionRepository } from "../domain/ISessionRepository";

export class SessionCreateUseCase implements IUseCase<{ userId: string, token: string }, void> {
  constructor(private repository: ISessionRepository) { }

  async run(params: { userId: string, token: string }): Promise<void> {
    await this.repository.saveSession(params.userId, params.token)
  }
}
