import type Pool from 'mysql2/typings/mysql/lib/Pool'
import { type IUserRepasitory } from '../domain/IUserRepository'
import { User } from '../domain/User'

export class UserRepository implements IUserRepasitory {
  constructor (private readonly pool: Pool) { }

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
