import { type IResponse } from './IResponse'

export interface IResponses {
  successWithBody: (status: number, msg: string, body: any) => IResponse
  successWithoutBody: (status: number) => IResponse
  errorWithBody: (status: number, msg: string, body: any) => IResponse
  errorWithoutBody: (status: number, msg: string) => IResponse
}
