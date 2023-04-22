import { type Express } from 'express'
import container from '../dependency-injection'
import { type UserPostController } from '../contrellers/UserPostController'

export const register = async (app: Express): Promise<void> => {
  const userPostController: UserPostController = container.get(
    'Apps.backend.controllers.UserPostController'
  )

  // eslint-disable-next-line
  app.post('/user', userPostController.run.bind(userPostController))
}
