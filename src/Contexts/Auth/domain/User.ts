import { v4 as uuidv4 } from 'uuid'

export class User {
  id: string
  username: string
  email: string
  password: string

  constructor (id: string | null, username: string, email: string, password: string) {
    this.id = id ?? uuidv4()
    this.username = username
    this.email = email
    this.password = password
  }
}
