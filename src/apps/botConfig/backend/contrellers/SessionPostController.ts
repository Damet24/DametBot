import { type Request, type Response } from 'express'
import { type IController } from './IController'
import httpStatus from 'http-status'
import { type IUseCase } from '../../../../Contexts/Shared/domain/IUseCase'

interface CreateSessionRequest {
  userId: string
  token: string
}

export class SessionPostController implements IController {
  constructor (private readonly useCase: IUseCase<{ userId: string, token: string }, void>) { }

  async run (req: Request<CreateSessionRequest>, res: Response): Promise<void> {
    await this.createSession(req)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
  }

  private async createSession (req: Request<CreateSessionRequest>): Promise<void> {
    await this.useCase.run(req.body)
  }
}
