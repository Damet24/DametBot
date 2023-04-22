import { Pool } from 'pg'

export class PostgresPoolFactory {
  static create (): Pool {
    const pool = new Pool({
    })
    return pool
  }
}
