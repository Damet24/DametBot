import { type User } from '../domain/User'

export interface AuthService {
  authenticate: (username: string, password: string) => Promise<string>
  validate: (token: string) => Promise<User | undefined>
}
