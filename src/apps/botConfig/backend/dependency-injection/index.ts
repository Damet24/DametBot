import { ContainerBuilder, Definition, Reference } from 'node-dependency-injection'
import WinstonLogger from '../../../../Contexts/Shared/infrastructure/WinstonLogger'
import { SessionRepository } from '../../../../Contexts/Auth/infrastructure/SessionRepository'
import { PostgresPoolFactory } from '../../../../Contexts/Shared/infrastructure/persistence/PoostgresPoolFactory'
import { SessionPostController } from '../contrellers/SessionPostController'
import { SessionCreateUseCase } from '../../../../Contexts/Auth/application/SessionCreateUseCase'
import { MysqlPoolFactory } from '../../../../Contexts/Shared/infrastructure/persistence/MysqlPoolFactory'

const container = new ContainerBuilder()

function registerFactory (_class: any, method: string, name: string): void {
  const definition = new Definition()
  definition.setFactory(_class, method)
  container.setDefinition(name, definition)
}

// Shared
container.register('Shared.Logger', WinstonLogger)
registerFactory(PostgresPoolFactory, 'create', 'Shared.domain.PostgresPoolFactory')
registerFactory(MysqlPoolFactory, 'create', 'Shared.domain.MysqlPoolFactory')

// Contexts
container.register('Auth.Session.domain.SessionRepository', SessionRepository)
  .addArgument(new Reference('Shared.domain.MysqlPoolFactory'))

container.register('Auth.Session.application.SessionCreateUseCase', SessionCreateUseCase)
  .addArgument(new Reference('Auth.Session.domain.SessionRepository'))

// Apps
container.register('Apps.backend.contollers.SessionPostController', SessionPostController)
  .addArgument(new Reference('Auth.Session.application.SessionCreateUseCase'))

export default container
