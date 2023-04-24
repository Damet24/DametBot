import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionRepository } from '../../../../../Contexts/Auth/infrastructure/SessionRepository'
import { SessionCreateUseCase } from '../../../../../Contexts/Auth/application/SessionCreateUseCase'
import { UserRepository } from '../../../../../Contexts/Auth/infrastructure/UserRepository'
import { UserCreateUseCase } from '../../../../../Contexts/Auth/application/UserCreateUseCase'
import { AuthService } from '../../../../../Contexts/Auth/services/AuthServiec'
import config from '../../../../../../config'
import { AuthMiddelware } from '../../../../../Contexts/Auth/infrastructure/middelwares/AuthMiddelware'
import { UserLoginUseCase } from '../../../../../Contexts/Auth/application/UserLoginUseCase'
import { UserGetUseCase } from '../../../../../Contexts/Auth/application/UserGetUseCase'

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

  container.register('Auth.User.application.UserGetUseCase', UserGetUseCase, [
    new Reference('Auth.User.domain.UserRepository'),
    new Reference('Auth.services.AuthService')
  ])

  container.register('Auth.User.application.UserLoginUseCase', UserLoginUseCase, [
    new Reference('Auth.User.domain.UserRepository'),
    new Reference('Auth.Session.domain.SessionRepository'),
    new Reference('Auth.services.AuthService')
  ])

  // Service
  container.register('Auth.services.AuthService', AuthService, [
    new Reference('Auth.User.domain.UserRepository'),
    config
  ])

  container.register('Auth.AuthMiddelware', AuthMiddelware)
    .addArgument(new Reference('Auth.services.AuthService'))
    .addArgument(new Reference('Shared.Responses'))
}
