import { SlashCommandBuilder } from 'discord.js'
import { Command } from '../../types'

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kcik a user for the server'),
  async execute () {
    console.log('kiqueao por marica')
  }
}

export default command
