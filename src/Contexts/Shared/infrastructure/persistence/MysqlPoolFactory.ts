import mysql, { type Pool, type PoolConfig } from 'mysql'

export class MysqlPoolFactory {
  static create (): Pool {
    const config: PoolConfig = {
      host: 'localhost',
      user: 'root',
      password: 'rootpass',
      database: 'inventory_db'
    }
    const pool = mysql.createPool(config)
    return pool
  }
}
