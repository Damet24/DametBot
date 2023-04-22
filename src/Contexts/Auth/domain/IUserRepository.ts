import { type User } from './User'

export interface IUserRepasitory {
  getUserByUsername: (username: string) => Promise<User | undefined>
}
