import { Server } from './server'

const port = process.env.PORT ?? '8000'

try {
  new Server(port).listen().catch(handleError)
} catch (e) {
  handleError(e)
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err)
  process.exit(1)
})

function handleError (e: any): void {
  console.log(e)
  process.exit(1)
}
