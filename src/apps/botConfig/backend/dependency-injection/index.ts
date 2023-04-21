import { ContainerBuilder } from 'node-dependency-injection'
import WinstonLogger from '../../../../Contexts/Shared/infrastructure/WinstonLogger'

const container = new ContainerBuilder()

container.register('Shared.Logger', WinstonLogger)

export {
  container
}
