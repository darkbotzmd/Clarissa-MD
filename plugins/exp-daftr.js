import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = conn.getName(who)
	let imgr = flaaa2.getRandom()
	     conn.sendButton(m.chat, bottime, `
Kamu Belum Daftar Kak ${name},\n Selamat {ucpn} Kamu Belum Terdaftar Didalam Database Silahkan Registrasi Terlebih Dahulu Agar Bisa Menggunakan Fitur Bot Tekan Tombol Register Dibawah Untuk Memulai\n\n*REGISTRASI!!!*
 `, `${imgr + 'Not Register'}`, [['Owner', '.owner'],['Register', '.daftar2']],fliveLoc22)
 } 
 handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>') 
 handler.tags = ['xp'] 
  
 handler.command = /^(daftar|verify|reg(ister)?)$/i 
  
 export default handler