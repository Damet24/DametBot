import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionRepository } from '../../../../../Contexts/Auth/infrastructure/SessionRepository'
import { SessionCreateUseCase } from '../../../../../Contexts/Auth/application/SessionCreateUseCase'
import { UserRepository } from '../../../../../Contexts/Auth/infrastructure/UserRepository'
import { UserCreateUseCase } from '../../../../../Contexts/Auth/application/UserCreateUseCase'

export function loadAuthDependencies (container: ContainerBuilder): void {
  // Session
  container.register('Auth.Session.domain.SessionRepository', SessionRepository)
    .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

  container.register('Auth.Session.application.SessionCreateUseCase', SessionCreateUseCase)
    .addArgument(new Reference('Auth.Session.domain.SessionRepository'))

  // User
  container.register('Auth.User.domain.UserRepository', UserRepository)
    .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

  container.register('Auth.User.application.UserCreateUseCase', UserCreateUseCase)
    .addArgument(new Reference('Auth.User.domain.UserRepository'))
}
