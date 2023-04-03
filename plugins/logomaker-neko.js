// fix by zeltoria

import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://oni-chan.my.id/api/canvas/nekogirl1?text1=${response[0]}&text2=${response[1]}&apikey=`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['logomaker']
handler.command = /^(logoneko)$/i
handler.limit = true

export default handler
