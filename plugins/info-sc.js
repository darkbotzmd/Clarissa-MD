import fetch from 'node-fetch'
let handler  = async (m, { conn, participants, usedPrefix: _p }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
	
                    let wan = 'https://telegra.ph/file/a77c36957cb68cc044e16.jpg'
let rul =`Kamu Nanya Source Codenya?\nTanya Disini Nih:https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw\n\n\n 🔖Mau Buy Sc Clarissa-MD No Enc? Sung Chat wa.me/6285867238794\n\n Note: Admin Hanya Melayani Pembayaran Via Gopay Saja!`
  conn.sendButtonImg(m.chat, await(await fetch(wan)).buffer(), rul, botdate, 'Owner', '.owner',)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|esceh)$/i
handler.group = false
handler.limit = false

handler.fail = null

export default handler