import { SlashCommandBuilder } from 'discord.js'
import { Command } from '../../types'

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('pong')
    .setDescription('send pong to user'),
  async execute () {
    console.log('hola')
  }
}

export default command
