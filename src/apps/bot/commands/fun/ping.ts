import { Interaction, SlashCommandBuilder } from 'discord.js'
import { Command } from '../../types'

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('send pong to user'),
  async execute (interaction: Interaction) {
    console.log(interaction)
  }
}

export default command
