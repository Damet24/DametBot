import { Events } from "discord.js"
import { Event } from "../types"

const event: Event = {
  name: Events.ClientReady,
  once: true,
  execute(client: any) {
    console.log(client)
  }
}

export default event
