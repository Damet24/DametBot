import mysql, { type PoolOptions, type Pool } from 'mysql2'

export class MysqlPoolFactory {
  static pool: Pool | null = null

  static create (): Pool {
    return this.getInstance()
  }

  static getInstance (): Pool {
    if (this.pool != null) return this.pool
    const config: PoolOptions = {
      host: 'localhost',
      user: 'root',
      password: 'rootpass',
      database: 'inventory_db'
    }
    this.pool = mysql.createPool(config)
    return this.pool
  }
}
