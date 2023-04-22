import type httpStatus from 'http-status'

export interface IResponse {
  error: string | null
  status: httpStatus.HttpStatusClasses
  body: any
}
