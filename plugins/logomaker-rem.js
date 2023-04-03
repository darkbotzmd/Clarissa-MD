// fix by zeltoria


import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://dash.api-kyouka.my.id/api/other/maker/rem?apikey=i4aPzjz64o&name=${response[0]}`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['logomaker']
handler.command = /^(logorem)$/i
handler.register = false

handler.limit = true

export default handler
