import type { Client } from 'discord.js'
import type { Event } from '../types'
import fs from 'node:fs'
import path from 'node:path'

const eventsPath = path.join(__dirname, '../events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'))

export async function loadEvents (client: Client): Promise<void> {
  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = await import(filePath) as { default: Event }

    if (event.default.once) {
      client.once(event.default.name, event.default.execute)
    } else {
      client.on(event.default.name, event.default.execute)
    }
  }
}
