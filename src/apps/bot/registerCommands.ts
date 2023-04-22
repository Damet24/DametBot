import { REST, type RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js'
import config from '../../../config'
import fs from 'node:fs'
import path from 'node:path'
import { type Command } from './types'

const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = []

const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)

export async function registerCommands (guildId: string): Promise<void> {
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder)
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'))

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file)
      const command = await import(filePath) as { default: Command }

      if ('data' in command.default && 'execute' in command.default) {
        commands.push(command.default.data.toJSON())
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
      }
    }
  }

  const rest = new REST().setToken(config.bot.token)

  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`)

    const data = await rest.put(
      Routes.applicationGuildCommands(config.bot.clientId, guildId),
      { body: commands }
    ) as string[]

    console.log(`Successfully reloaded ${data.length} application (/) commands.`)
  } catch (error) {
    console.error(error)
  }
}
