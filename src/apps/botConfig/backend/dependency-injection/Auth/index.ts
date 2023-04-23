import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionRepository } from '../../../../../Contexts/Auth/infrastructure/SessionRepository'
import { SessionCreateUseCase } from '../../../../../Contexts/Auth/application/SessionCreateUseCase'
import { UserRepository } from '../../../../../Contexts/Auth/infrastructure/UserRepository'
import { UserCreateUseCase } from '../../../../../Contexts/Auth/application/UserCreateUseCase'
import { AuthService } from '../../../../../Contexts/Auth/services/AuthServiec'
import config from '../../../../../../config'

export function loadAuthDependencies (container: ContainerBuilder): void {
  // Session
  container.register('Auth.Session.domain.SessionRepository', SessionRepository)
    .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

  container.register('Auth.Session.application.SessionCreateUseCase', SessionCreateUseCase)
    .addArgument(new Reference('Auth.Session.domain.SessionRepository'))

  // User
  container.register('Auth.User.domain.UserRepository', UserRepository)
    .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

  container.register('Auth.User.application.UserCreateUseCase', UserCreateUseCase, [
    new Reference('Auth.User.domain.UserRepository'),
    new Reference('Auth.services.AuthService')
  ])

  // Service
  container.register('Auth.services.AuthService', AuthService)
    .addArgument(config)
}
