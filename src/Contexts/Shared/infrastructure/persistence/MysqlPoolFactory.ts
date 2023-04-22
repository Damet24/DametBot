import mysql, { type PoolOptions, type Pool } from 'mysql2'

export class MysqlPoolFactory {
  static create (): Pool {
    const config: PoolOptions = {
      host: 'localhost',
      user: 'root',
      password: 'rootpass',
      database: 'inventory_db'
    }
    const pool = mysql.createPool(config)
    return pool
  }
}
