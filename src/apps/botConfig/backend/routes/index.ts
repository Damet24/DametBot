// import glob from 'glob'
import path from 'node:path'
import fs from 'node:fs'
import { type Router } from 'express'

export function registerRoutes (router: Router): void {
  const routes = fs.readdirSync(path.resolve(__dirname, '.'))
    .filter(item => item.endsWith('route.ts'))
    .map(item => item.slice(0, -3))

  routes.forEach(route => { register(route, router) })
}

function register (routePath: string, app: Router): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require(path.resolve(__dirname, routePath))
  route.register(app)
}
