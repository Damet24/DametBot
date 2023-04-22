import { type User } from './User'

export interface IUserRepasitory {
  saveUser: (userData: { username: string }) => Promise<void>
  getUserByUsername: (username: string) => Promise<User | undefined>
}
