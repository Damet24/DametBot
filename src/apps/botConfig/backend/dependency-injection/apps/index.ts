import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionPostController } from '../../contrellers/SessionPostController'
import { UserPostController } from '../../contrellers/UserPostController'

export function loadAppsDependencies (container: ContainerBuilder): void {
  // Session
  container.register('Apps.backend.controllers.SessionPostController', SessionPostController)
    .addArgument(new Reference('Auth.Session.application.SessionCreateUseCase'))

  // User
  container.register('Apps.backend.controllers.UserPostController', UserPostController)
    .addArgument(new Reference('Auth.User.application.UserCreateUseCase'))
}
