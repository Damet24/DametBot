import { type User } from './User'

export interface IUserRepasitory {
  saveUser: (userData: { username: string, email: string, password: string }) => Promise<void>
  getUserByUsername: (username: string) => Promise<User | undefined>
  getUserById: (id: string) => Promise<User | undefined>
  getUserByEmail: (email: string) => Promise<User | undefined>
}
