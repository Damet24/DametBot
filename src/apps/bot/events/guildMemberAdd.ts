import { Events, type GuildMember } from 'discord.js'
import { type Event } from '../types'

const event: Event = {
  name: Events.GuildMemberAdd,
  once: false,
  async execute (member: GuildMember) {
    const welcomeMessage = `
    Bienvenid@ a ${member.guild.name}.
    Recuendo leer las  reglas.
    Espero que disfurtes de star en esta comunidod.
    `
    const channel = await member.createDM()
    await channel.send(welcomeMessage)
  }
}

export default event
