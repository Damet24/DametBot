import { Collection } from 'discord.js'
import fs from 'node:fs'
import path from 'node:path'
import { Command } from '../types'

const foldersPath = path.join(__dirname, '../commands')
const commandFolders = fs.readdirSync(foldersPath)

export async function loadCommands(collection: Collection<string, Command>) {
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder)
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'))

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file)
      const command = await import(filePath) as { default: Command }

      if ('data' in command.default && 'execute' in command.default) {
        collection.set(command.default.data.name, command.default)
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
      }
    }
  }
}
