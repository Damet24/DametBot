import { type Express } from 'express'
import container from '../dependency-injection'
import { type UserPostController } from '../contrellers/user/UserPostController'
// import { type UserGetController } from '../contrellers/user/UserGetController'
import { type UserLoginController } from '../contrellers/user/UserLoginContraller'
import { type UserGetController } from '../contrellers/user/UserGetController'
// import { type AuthMiddelware } from '../../../../Contexts/Auth/infrastructure/middelwares/AuthMiddelware'

export const register = async (app: Express): Promise<void> => {
  // const authMiddelware: AuthMiddelware = container.get('Auth.AuthMiddelware')
  const userPostController = container.get<UserPostController>('Apps.backend.controllers.UserPostController')

  const userLoginController = container.get<UserLoginController>('Apps.backend.controllers.UserLoginController')

  const userGetController = container.get<UserGetController>('Apps.backend.controllers.UserGetController')

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.post('/user', userPostController.run.bind(userPostController))

  // app.post('/user/login', authMiddelware.run.bind(authMiddelware))
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.post('/user/login', userLoginController.run.bind(userLoginController))

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.get('/user', userGetController.run.bind(userGetController))
}
