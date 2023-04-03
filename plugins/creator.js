import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;MasRull (Sepuh);;;\nFN:MasRull (Sepuh)\nORG:MasRull (Sepuh)\nTITLE:\nitem1.TEL;waid=6285867238794:+62 858-6723-8794\nitem1.X-ABLabel:MasRull (Sepuh)\nX-WA-BIZ-DESCRIPTION:Urip Kui Asline Penak Seng Ngroso Rapenak Yo Matio Ae:v\nX-WA-BIZ-NAME:MasRull (Sepuh)\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }},)
  }
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler