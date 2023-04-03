import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/intel.opus')
let hh = fs.readFileSync('./thumbnail.jpg')
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, fvn, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: sgc,
    mediaType: 2, 
    description: sgc,
    title: gcname,
    body: bottime,
    sourceUrl: sgc
  }
  } }) 
          }
handler.customPrefix = /^(bjorkowi|jokowi|owi|megawati|puan|banteng|bnteng|banteng merah|bnteng merah)$/i
handler.command = new RegExp

export default handler
