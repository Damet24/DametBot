import { type HttpStatusClasses } from 'http-status'

export class HttpError extends Error {
  statusCode: HttpStatusClasses

  constructor (statusCode: HttpStatusClasses, msg: string) {
    super(msg)
    this.statusCode = statusCode
  }
}
