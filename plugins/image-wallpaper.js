//fix by zeltoria


import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Mau Cari Apa?'
	let zeltoria = `https://api.lolhuman.xyz/api/wallpaper?apikey=Fikrii&query=${text}`
	conn.sendButton(m.chat, 'Nih Kak Hasil Pencariannya', wm, await(await fetch(zeltoria)).buffer(), [['Berikutnya',`.${command}`]],m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']

handler.command = /^(wallpaper2?)$/i

export default handler