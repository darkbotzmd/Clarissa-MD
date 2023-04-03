import fetch from 'node-fetch'
import fs from 'fs'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = hwaifu.getRandom()
let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
global.rep = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
conn.sendButtonDoc(m.chat, `𝐃𝐎𝐍𝐀𝐒𝐈`, `⮕ 𝐆𝗼𝐩𝐚𝐲 = [6281265970249]\n⮕ 𝐃𝐚𝐧𝐚 = [6281265970249]\n\n𝐍𝗼𝐭𝐞 : 𝐉𝐢𝐤𝐚 𝐒𝐮𝐝𝐚𝐡 𝐃𝗼𝐧𝐚𝐬𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐢𝐫𝗺\n𝐁𝐮𝐤𝐭𝐢 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫!!\n𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡
`, 'Owner', '.owner', fliveLoc22, fliveLoc22,)
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}