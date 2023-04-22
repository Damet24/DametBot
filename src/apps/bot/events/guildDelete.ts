import { Events, type Guild } from 'discord.js'
import { type Event } from '../types'

const event: Event = {
  name: Events.GuildDelete,
  once: true,
  execute (client: Guild) {
    console.log('chao malparidos >:v', client)
  }
}

export default event
