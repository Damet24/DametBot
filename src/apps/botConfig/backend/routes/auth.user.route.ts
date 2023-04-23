import { type Express } from 'express'
import container from '../dependency-injection'
import { type UserPostController } from '../contrellers/user/UserPostController'
// import { type UserGetController } from '../contrellers/user/UserGetController'
import { type UserLoginController } from '../contrellers/user/UserLoginContraller'
// import { type AuthMiddelware } from '../../../../Contexts/Auth/infrastructure/middelwares/AuthMiddelware'

export const register = async (app: Express): Promise<void> => {
  // const authMiddelware: AuthMiddelware = container.get('Auth.AuthMiddelware')
  const userPostController: UserPostController = container.get(
    'Apps.backend.controllers.UserPostController'
  )

  const userLoginController: UserLoginController = container.get(
    'Apps.backend.controllers.UserLoginController'
  )

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.post('/user', userPostController.run.bind(userPostController))

  // app.post('/user/login', authMiddelware.run.bind(authMiddelware))
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.post('/user/login', userLoginController.run.bind(userLoginController))
}
