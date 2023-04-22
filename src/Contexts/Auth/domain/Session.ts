
import { v4 as uuidv4 } from 'uuid'

export class Session {
  id: string
  userId: string
  token: string

  constructor (id: string | null, userId: string, token: string) {
    this.id = id ?? uuidv4()
    this.userId = userId
    this.token = token
  }
}
