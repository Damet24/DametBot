import { type ISessionRepository } from '../domain/ISessionRepository'
import { Session } from '../domain/Session'
import { type RowDataPacket, type Pool } from 'mysql2'

interface ISession extends RowDataPacket, Session {
}

export class SessionRepository implements ISessionRepository {
  constructor (private readonly pool: Pool) { }

  async saveSession (userId: string, token: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const session = new Session(null, userId, token)
      this.pool.query('INSERT INTO sessions SET ?', session, (error, _data) => {
        if (error != null) reject(error)
        resolve()
      })
    })
  }

  async getSessionByToken (token: string): Promise<Session | undefined> {
    return await new Promise<Session | undefined>((resolve, reject) => {
      this.pool.query<ISession[]>(`SELECT * FROM sessions WHERE token = ${token}`, (error, data) => {
        if (error != null) reject(error)
        resolve(data[0])
      })
    })
  }

  async deleteSession (token: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.pool.query(`DELETE FROM sessions WHERE token = ${token}`, (error, _data) => {
        if (error != null) reject(error)
        resolve()
      })
    })
  }
}
