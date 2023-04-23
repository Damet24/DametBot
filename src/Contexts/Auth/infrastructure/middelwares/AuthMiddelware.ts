import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type IAuthService } from '../../domain/IAuthService'
import { type IMiddelware } from '../../../Shared/domain/IMiddelware'
import { type IResponses } from '../../../Shared/domain/IResponses'

export class AuthMiddelware implements IMiddelware {
  constructor (
    private readonly authService: IAuthService,
    private readonly response: IResponses
  ) { }

  async run (req: Request, res: Response, next: NextFunction): Promise<void> {
    const status = httpStatus.UNAUTHORIZED

    const authHeader = req.headers.authorization

    console.log(authHeader)
    if (authHeader === undefined) {
      res.status(status).send(this.response.errorWithoutBody(status, httpStatus[401]))
      return
    }

    if (!authHeader.startsWith('Bearer ')) {
      res.status(status).send(this.response.errorWithoutBody(status, httpStatus[401]))
      return
    }

    const [, token] = authHeader.split(' ')
    const user = await this.authService.validate(token)
    if (user == null) {
      res.status(status).send(this.response.errorWithoutBody(status, httpStatus[401]))
      return
    }

    next()
  }
}
