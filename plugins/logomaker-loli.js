// fix by zeltoria

import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://oni-chan.my.id/api/canvas/loliGgo?name=${response[0]}&apikey=`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['logomaker']
handler.command = /^(logololi)$/i
handler.register = false

handler.limit = true

export default handler
