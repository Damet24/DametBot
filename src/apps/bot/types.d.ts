import { CacheType, Interaction, SlashCommandBuilder } from "discord.js";

export interface Command {
  data: SlashCommandBuilder
  execute: (interaction: Interaction<CacheType>) => Promise<void>
}
