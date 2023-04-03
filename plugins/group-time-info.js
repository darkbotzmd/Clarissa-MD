let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => m.reply(`
Contoh:
${usedPrefix}*gctime tutup*
${usedPrefix}*gctime buka*

Contoh pilihan: 
${usedPrefix}*gctimed buka 1* 
(Maka grup akan di buka otomatis 1 detik kemudian.)\n
${usedPrefix}*gctimem buka 1* 
(Maka grup akan di buka otomatis 1 menit kemudian.)\n
${usedPrefix}*gctimej buka 1* 
(Maka grup akan di buka otomatis 1 jam kemudian.)\n
`.trim()) 
handler.help = ['grouptime cara pakai','gctime cara pakai']
handler.tags = ['group']
handler.command = /^(gctime|grouptime|gruptime)$/i

handler.botAdmin = true
handler.group = true 

export default handler