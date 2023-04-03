import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/kamunanyak.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, fvn, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: syt,
    mediaType: 2, 
    description: syt,
    title: gcname,
    body: bottime,
    thumbnail: await(await fetch("https://telegra.ph/file/c080917609684bf229cd3.jpg")).buffer(),
    sourceUrl: syt
  }
  } }) 
          }
handler.customPrefix = /^(yntkts|siapa|kenapa?|knpa?|knp?|kenapa|knpa|knp|siaoa|nanya|nanyee|yah gak tau|gak tau|tau)$/i
handler.command = new RegExp

export default handler
