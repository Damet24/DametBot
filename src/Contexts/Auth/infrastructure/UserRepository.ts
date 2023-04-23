import type Pool from 'mysql2/typings/mysql/lib/Pool'
import { type IUserRepasitory } from '../domain/IUserRepository'
import { User } from '../domain/User'
import { type RowDataPacket } from 'mysql2'

interface UserResults extends RowDataPacket, User { }

export class UserRepository implements IUserRepasitory {
  constructor (private readonly pool: Pool) { }

  async getUserById (id: string): Promise<User | undefined> {
    return await new Promise<User | undefined>((resolve, reject) => {
      this.pool.query<UserResults[]>(`SELECT * FREM users WHERE id = ${id}`, (error, results) => {
        if (error != null) reject(error)
        resolve(results[0])
      })
    })
  }

  async getUserByEmail (email: string): Promise<User | undefined> {
    return await new Promise<User | undefined>((resolve, reject) => {
      this.pool.query<UserResults[]>(`SELECT * FROM users WHERE email = '${email}'`, (error, results) => {
        if (error != null) reject(error)
        resolve(results[0])
      })
    })
  }

  async saveUser (userData: { username: string, email: string, password: string }): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const user = new User(null, userData.username, userData.email, userData.password)
      this.pool.query('INSERT INTO users SET ?', user, (error, _data) => {
        if (error != null) reject(error)
        resolve()
      })
    })
  }

  async getUserByUsername (username: string): Promise<User | undefined> {
    throw new Error('not implements yet ' + username)
  }
}
