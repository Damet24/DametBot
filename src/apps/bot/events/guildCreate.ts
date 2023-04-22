import { Events, type Guild } from 'discord.js'
import { type Event } from '../types'
import { registerCommands } from '../registerCommands'

const event: Event = {
  name: Events.GuildCreate,
  once: true,
  async execute (client: Guild) {
    await registerCommands(client.id)
  }
}

export default event
