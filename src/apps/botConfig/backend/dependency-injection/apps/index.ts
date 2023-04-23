import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionPostController } from '../../contrellers/session/SessionPostController'
import { UserPostController } from '../../contrellers/user/UserPostController'
// import { UserGetController } from '../../contrellers/user/UserGetController'
import { UserLoginController } from '../../contrellers/user/UserLoginContraller'

export function loadAppsDependencies (container: ContainerBuilder): void {
  // Session
  container.register('Apps.backend.controllers.SessionPostController', SessionPostController)
    .addArgument(new Reference('Auth.Session.application.SessionCreateUseCase'))

  // User
  container.register('Apps.backend.controllers.UserPostController', UserPostController, [
    new Reference('Auth.User.application.UserCreateUseCase'),
    new Reference('Shared.Responses')
  ])

  container.register('Apps.backend.controllers.UserLoginController', UserLoginController, [
    new Reference('Auth.User.application.UserLoginUseCase'),
    new Reference('Shared.Responses')
  ])
}
