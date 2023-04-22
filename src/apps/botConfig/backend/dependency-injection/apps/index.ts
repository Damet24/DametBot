import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionPostController } from '../../contrellers/SessionPostController'

export function loadAppsDependencies (container: ContainerBuilder): void {
  container.register('Apps.backend.contollers.SessionPostController', SessionPostController)
    .addArgument(new Reference('Auth.Session.application.SessionCreateUseCase'))
}
