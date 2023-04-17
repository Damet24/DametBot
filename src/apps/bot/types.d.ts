import { CacheType, Client, Collection, Interaction, SlashCommandBuilder } from "discord.js";

export interface Command {
  data: SlashCommandBuilder
  execute: (interaction: any) => Promise<void>
  handler: (data: any) => string
}

export interface Event {
  name: string
  once: boolean
  execute: (...args: any[]) => Awaitable<void>
}
