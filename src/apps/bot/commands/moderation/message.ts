import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js'
import { type Command } from '../../types'
import { EmbedBuilderManager } from '../../utils/EmbedBuilderManager'

const data = new SlashCommandBuilder()
  .setName('message')
  .setDescription('test message embed')
  .addStringOption(option =>
    option.setName('message')
      .setDescription('message to show')
      .setRequired(true))

async function execute (interaction: ChatInputCommandInteraction): Promise<void> {
  const message = interaction.options.getString('message')
  if (message != null) {
    await interaction.reply({ embeds: [EmbedBuilderManager.basicMessage('test', message)] })
  }
}

const command: Command = {
  data,
  execute
}

export default command
