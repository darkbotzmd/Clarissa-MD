import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teks Nya Banh?\nContoh :\!pornhub tes|tes'
  m.reply('Proses...')
  let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
  let res = `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=8e66d0934cf741bfd2182c16&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pornhub.jpg', `*Done Banh*\n\n${botdate}`, m, false)
}
handler.help = ['pornhub'].map(v => v + ' <text1>|<teks2>')
handler.tags = ['logomaker']
handler.command = /^(pornhub)$/i
handler.register = true

handler.limit = true
handler.premium = true

export default handler
