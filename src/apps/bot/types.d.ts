import { CacheType, Client, Collection, Interaction, SlashCommandBuilder } from "discord.js";

export interface Command {
  data: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
  execute: (interaction: any) => Promise<void>
}

export interface Event {
  name: string
  once: boolean
  execute: (...args: any[]) => Awaitable<void>
}
