import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import helmet from 'helmet'
import type Logger from '../../../Contexts/Shared/domain/Logger'
import { container } from './dependency-injection'

export class Server {
  private readonly express: express.Express
  port: string
  private readonly logger: Logger

  constructor (port: string) {
    this.port = port
    this.logger = container.get('Shared.Logger')
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

    router.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
      this.logger.error(error)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
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
