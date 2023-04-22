import type httpStatus from 'http-status'
import { type IResponse } from './IResponse'

export interface IResponses {
  successWithBody: (status: httpStatus.HttpStatusClasses, msg: string, body: any) => IResponse
  successWithoutBody: (status: httpStatus.HttpStatusClasses) => IResponse
  errorWithBody: (status: httpStatus.HttpStatusClasses, msg: string, body: any) => IResponse
  errorWithoutBody: (status: httpStatus.HttpStatusClasses, msg: string) => IResponse
}
