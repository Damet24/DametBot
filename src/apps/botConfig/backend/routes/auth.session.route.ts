import { type Express } from 'express'
import container from '../dependency-injection'
import { type SessionPostController } from '../contrellers/session/SessionPostController'

export const register = async (app: Express): Promise<void> => {
  const sessionPostController: SessionPostController = container.get(
    'Apps.backend.controllers.SessionPostController'
  )

  // eslint-disable-next-line
  app.post('/session', sessionPostController.run.bind(sessionPostController))
}
