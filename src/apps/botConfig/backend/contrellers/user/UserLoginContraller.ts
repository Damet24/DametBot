import { type NextFunction, type Request, type Response } from 'express'
import { type IController } from '../IController'
import httpStatus from 'http-status'
import { type IUseCase } from '../../../../../Contexts/Shared/domain/IUseCase'
import { type IResponses } from '../../../../../Contexts/Shared/domain/IResponses'

interface LoginUserRequest {
  email: string
  password: string
}

export class UserLoginController implements IController {
  constructor (
    private readonly useCase: IUseCase<LoginUserRequest, { accessToken: string }>,
    private readonly response: IResponses
  ) { }

  async run (req: Request<LoginUserRequest>, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await this.loginUser(req)
      const status = httpStatus.CREATED
      res.status(status).send(this.response.successWithBody(status, httpStatus[201], token))
    } catch (error) {
      next(error)
    }
  }

  private async loginUser (req: Request<LoginUserRequest>): Promise<{ accessToken: string }> {
    return await this.useCase.run(req.body)
  }
}
