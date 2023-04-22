import { type Request, type Response } from 'express'

export interface IController {
  run: (req: Request<any>, res: Response) => Promise<void>
}
