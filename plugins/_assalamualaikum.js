import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Wa'alaikumsalam*`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m)
}
handler.customPrefix = /^(Assalamualaikum|asalamualaikum|assalamualaikum|salam)$/i
handler.command = new RegExp

export default handler