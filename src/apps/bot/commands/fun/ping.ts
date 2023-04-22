import { type ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('send pong to user'),
  async execute (interaction: ChatInputCommandInteraction) {
    await interaction.reply('Pong!')
  }
}
