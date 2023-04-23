import { type IResponse } from '../domain/IResponse'
import { type IResponses } from '../domain/IResponses'

export class Responses implements IResponses {
  successWithBody (status: number, msg: string, body: any): IResponse {
    return {
      error: null,
      body: { msg, ...body },
      status
    }
  }

  successWithoutBody (status: number): IResponse {
    return {
      error: null,
      body: null,
      status
    }
  }

  errorWithBody (status: number, msg: string, body: any): IResponse {
    return {
      error: msg,
      body,
      status
    }
  }

  errorWithoutBody (status: number, msg: string): IResponse {
    return {
      error: msg,
      body: null,
      status
    }
  }
}
