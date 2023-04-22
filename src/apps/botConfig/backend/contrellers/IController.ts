import { type NextFunction, type Request, type Response } from 'express'

export interface IController {
  run: (req: Request<any>, res: Response, next: NextFunction) => Promise<void>
}
