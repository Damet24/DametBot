import { type Express } from 'express'
import container from '../dependency-injection'
import { type SessionPostController } from '../contrellers/SessionPostController'

export const register = async (app: Express): Promise<void> => {
  const sessionPostController: SessionPostController = container.get(
    'Apps.backend.contollers.SessionPostController'
  )

  console.log(sessionPostController)
  // eslint-disable-next-line
  app.post('/session', sessionPostController.run.bind(sessionPostController))
}
