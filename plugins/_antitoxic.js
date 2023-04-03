import fs from 'fs'
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    let picc = 'https://telegra.ph/file/c080917609684bf229cd3.jpg'
    let text = `Terdeteksi *${name}* Telah Mengirim Kata-Kata Aneh!\n\n_“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)._ ${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`
    let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
    
    if (chat.antiToxic && isAntiToxic) {
        await conn.reply(m.chat, `Terdeteksi *${name}* Telah Mengirim Kata-Kata Aneh!\n\n_“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)._ ${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`,)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 /*   global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true*/
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    return !0
}

export const disable = true
