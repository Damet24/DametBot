import { ContainerBuilder, Definition } from 'node-dependency-injection'
import { loadSharedDependencies } from './Shared'
import { loadAuthDependencies } from './Auth'
import { loadAppsDependencies } from './apps'

const container = new ContainerBuilder()

export function registerFactory (_class: any, method: string, name: string): void {
  const definition = new Definition()
  definition.setFactory(_class, method)
  container.setDefinition(name, definition)
}

// Shared
loadSharedDependencies(container)

// Contexts
loadAuthDependencies(container)

// Apps
loadAppsDependencies(container)

export default container
