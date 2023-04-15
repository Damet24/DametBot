import { Client, Collection, Events, GatewayIntentBits } from 'discord.js'
import config from '../../../config'
import { loadCommands } from './utils/command_handler'
import { Command } from './types'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const commands = new Collection<string, Command>()

loadCommands(commands)
  .then(() => {
    client.on(Events.InteractionCreate, async interaction => {
      if (!interaction.isChatInputCommand()) return

      const command = commands.get(interaction.commandName)

      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`)
        return
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
          await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
      }
    })

    client.login(config.bot.token)
  })

