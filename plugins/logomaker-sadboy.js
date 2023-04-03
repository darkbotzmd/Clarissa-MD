// fix by zeltoria

import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://oni-chan.my.id/api/canvas/nekosad?text1=${response[0]}&text2=${response[1]}&apikey=`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['logomaker']
handler.command = /^(logosadboy)$/i
handler.limit = true

export default handler
