let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let imgr = flaaa2.getRandom()
    let id = m.chat
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		
   

       conn.send2ButtonImg(m.chat, pp, `${groupMetadata.subject}`, `*Silahkan Pilih Mau Mode Group Apa?\n\n`,
   'BUKA','.group2 open',
     'TUTUP','.group2 close',
       )   
/*conn.sendButton(m.chat, hehe, `Silahkan Pilih Mau Mode Group Apa?\n\n`, `${imgr + `${groupMetadata.subject}`}`, [['OPEN', '.group2 open'],['CLOSE', '.group2 close']],m)*/
 }
handler.help = ['settingsgroup','gcs','mgc','modegc']
handler.tags = ['group']
handler.command = /^(gcs|groups|settingsgroup|modegc|mgc)$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
