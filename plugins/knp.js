import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
await m.reply('gaoaoaa:v')
}
handler.customPrefix = /^kmu|kamu (kn|ke?aoa|aoaa)$/i
handler.command = new RegExp

export default handler