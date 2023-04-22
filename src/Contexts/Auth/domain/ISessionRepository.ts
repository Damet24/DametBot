import { type Session } from './Session'

export interface ISessionRepository {
  saveSession: (userId: string, token: string) => Promise<void>
  getSessionByToken: (token: string) => Promise<Session | undefined>
  deleteSession: (token: string) => Promise<void>
}
