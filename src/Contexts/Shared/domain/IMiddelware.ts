import { type NextFunction, type Request, type Response } from 'express'

export interface IMiddelware {
  run: (req: Request, res: Response, next: NextFunction) => Promise<void>
}
