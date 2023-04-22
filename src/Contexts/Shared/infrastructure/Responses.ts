import { type HttpStatusClasses } from 'http-status'
import { type IResponse } from '../domain/IResponse'
import { type IResponses } from '../domain/IResponses'

export class Responses implements IResponses {
  successWithBody (status: HttpStatusClasses, msg: string, body: any): IResponse {
    return {
      error: null,
      body: { msg, body },
      status
    }
  }

  successWithoutBody (status: HttpStatusClasses): IResponse {
    return {
      error: null,
      body: null,
      status
    }
  }

  errorWithBody (status: HttpStatusClasses, msg: string, body: any): IResponse {
    return {
      error: msg,
      body,
      status
    }
  }

  errorWithoutBody (status: HttpStatusClasses, msg: string): IResponse {
    return {
      error: msg,
      body: null,
      status
    }
  }
}
