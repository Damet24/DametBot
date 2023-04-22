import { type NextFunction, type Request, type Response } from 'express'
import { type IController } from './IController'
import httpStatus from 'http-status'
import { type IUseCase } from '../../../../Contexts/Shared/domain/IUseCase'

interface CreateUserRequest {
  username: string
}

export class UserPostController implements IController {
  constructor (private readonly useCase: IUseCase<{ username: string }, void>) { }

  async run (req: Request<CreateUserRequest>, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.createUser(req)
      res.status(httpStatus.CREATED).send()
    } catch (error) {
      next(error)
    }
  }

  private async createUser (req: Request<CreateUserRequest>): Promise<void> {
    await this.useCase.run(req.body)
  }
}
