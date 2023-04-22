import { v4 as uuidv4 } from 'uuid'

export class User {
  id: string
  username: string

  constructor (id: string | null, username: string) {
    this.id = id ?? uuidv4()
    this.username = username
  }
}
