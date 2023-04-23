import { type NextFunction, type Request, type Response } from 'express'
import { type IController } from '../IController'
import httpStatus from 'http-status'
import { type IUseCase } from '../../../../../Contexts/Shared/domain/IUseCase'
import { type IResponses } from '../../../../../Contexts/Shared/domain/IResponses'

interface CreateUserRequest {
  username: string
}

export class UserGetController implements IController {
  constructor (
    private readonly useCase: IUseCase<{ username: string }, any>,
    private readonly response: IResponses
  ) { }

  async run (req: Request<CreateUserRequest>, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.getUser(req)
      const status = httpStatus.OK
      res.status(status).send(this.response.successWithBody(status, httpStatus[200], data))
    } catch (error) {
      next(error)
    }
  }

  private async getUser (req: Request<CreateUserRequest>): Promise<{ accessToken: string }> {
    const data = await this.useCase.run(req.body)
    return data
  }
}
