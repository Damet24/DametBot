import { EmbedBuilder } from 'discord.js'

export class EmbedBuilderManager {
  static basicMessage (title: string, message: string): EmbedBuilder {
    return new EmbedBuilder()
      .setTitle(title)
      .setDescription(message)
  }

  static getVideoMessage (): EmbedBuilder {
    return new EmbedBuilder()
  }
}
