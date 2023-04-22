import { Events } from 'discord.js'
import { type Event } from '../types'

const event: Event = {
  name: Events.ClientReady,
  once: true,
  execute (_client: any) {
    console.log('ready')
  }
}

export default event
