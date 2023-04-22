import { Reference, type ContainerBuilder } from 'node-dependency-injection'
import { SessionRepository } from '../../../../../Contexts/Auth/infrastructure/SessionRepository'
import { SessionCreateUseCase } from '../../../../../Contexts/Auth/application/SessionCreateUseCase'

export function loadAuthDependencies (container: ContainerBuilder): void {
  container.register('Auth.Session.domain.SessionRepository', SessionRepository)
    .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

  container.register('Auth.Session.application.SessionCreateUseCase', SessionCreateUseCase)
    .addArgument(new Reference('Auth.Session.domain.SessionRepository'))
}
