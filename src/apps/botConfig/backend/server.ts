import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import helmet from 'helmet'
import type Logger from '../../../Contexts/Shared/domain/Logger'
import container from './dependency-injection'
import { registerRoutes } from './routes'
import { type HttpError } from '../../../Contexts/Shared/domain/HttpError'
import { type IResponses } from '../../../Contexts/Shared/domain/IResponses'

export class Server {
  private readonly express: express.Express
  port: string
  private readonly logger: Logger
  private readonly response: IResponses

  constructor (port: string) {
    this.port = port
    this.logger = container.get('Shared.Logger')
    this.response = container.get('Shared.Responses')
    this.express = express()
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))
    this.express.use(cors())

    const router = express.Router()
    this.express.use(router)
    registerRoutes(router)

    router.use((error: HttpError, _req: Request, res: Response, _next: NextFunction) => {
      this.logger.error(error)
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .json(this.response.errorWithoutBody(error.statusCode, httpStatus[500]))
    })
  }

  async listen (): Promise<void> {
    await new Promise<void>(resolve => {
      this.express.listen(this.port, () => {
        this.logger.info(` BotConfig App is running on porth ${this.port}`)
        this.logger.info(' Press CTRL-C to stop\n')
        resolve()
      })
    })
  }
}
