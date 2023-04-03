import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
/*
%dash

%m3

%m1 *T O D A Y*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wib
%m3

%m1 *I N F O*
%m2 *Bot Name:* %me
%m2 *Mode:* 
%m2 *Platform:*
%m2 *Type:* 
%m2 *Baileys:* Multi Device
%m2 *Prefix:* 
%m2 *Uptime:*
%m2 *Database:* 
%m3

%m1 *I N F O  C M D* 
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
*/
const defaultMenu = {
before: `╭─「 %me 」
┆• *Baileys:* Multi Device
┆• *Versi Baileys:* ${baileys}
┆• *Prefix:* Multi Prefix
┆• *Mode:* Public
┆• *Tanggal:* %date
┆• *Waktu:* %wib
┆• *Hari:* %week %weton
┆• *Pengguna Terdaftar:* %totalreg
╰──────────┈༓
%readmore
`.trimStart(),
header: '❏––––『 *%category* 』',
body: `┆✦ %cmd`,
footer: `┗━═───┈༓\n`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let rul =` ${pickRandom(['🏓', '📮', '🗿', '🍃', '🎋'])}`
let dewi =` ${pickRandom(['🍀', '🍂', '🌵', '☘️'])}`
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'main', 'rpg', 'nsfw', 'donlot', 'grup', 'prem', 'halal', 'meker', 'laen', 'owner', 'gpt']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'asupan': 'Asupan',
'stress': 'Stress',
'menfess': 'Menfess',
'game': 'Game',
'rpg': 'RPG Games',
'textpro': 'Make text logo',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'gpt': 'Gpt',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'y': 'No Category',
}
if (teks == 'main') tags = {
'main': 'Main',
'menfess': 'Menfess',
'anime': 'Anime',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'news': 'News',
'random': 'Random',
'xp': 'Exp & Limit',
'audio': 'Audio',
'jadibot': 'JadiBOT'
}
if (teks == 'rpg') tags ={
'rpg': 'RPG',
'kerangajaib': 'Kerang Ajaib',
'stress': 'Stress',
'game': 'Game',
'fun': 'Fun'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw',
'asupan': 'Asupan'
}
if (teks == 'donlot') tags = {
'downloader': 'Downloader'
}
if (teks == 'grup') tags = {
'group': 'Grup',
'admin': 'Admin',
'info': 'Info',
'database': 'Database',
'tools': 'Tools',
'voting': 'Voting',
'absen': 'Absen',
'edukasi': 'Edukasi'
}
if (teks == 'prem') tags = {
'premium': 'Fitur Premium'
}
if (teks == 'halal') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'meker') tags = {
'sticker': 'Stiker',
'textpro': 'TextPro',
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'laen') tags = {
'berita': 'Berita',
'quotes': 'Quotes',
'nocategory': 'No Category'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
if (teks == 'gpt') tags = {
'gpt': 'Openai Chat'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `≡ List Various Commands`,
rows: [
{title: `🍁 Main`, rowId: ".? main", description: "Menampilkan Main Menu"},
{title: `🕹 RPG Commands`, rowId: ".? rpg", description: "Menampilkan Command Rpg"},
{title: `🔞 Nsfw Commands`, rowId: ".? nsfw", description: "Hmm SuS 🤨"},
{title: `📂 Downloader Commands`, rowId: ".? donlot", description: "Download YT, Tiktok, Twit, Dll"},
{title: `🔗 Group Commands`, rowId: ".? grup", description: "Buat Ngatur GrupLu"},
{title: `🔖 Premium Fitur`, rowId: ".? prem", description: "Command Khusus Prem User!"},
{title: `🕌 Islamic Commands`, rowId: ".? halal", description: "Tobat Yuk Kak:)"},
{title: `🖨 Maker Commands`, rowId: ".? meker", description: `Membuat Sesuatu Dengan Bantuan ${namebot}`},
{title: `🎋 Other Commands`, rowId: ".? laen", description: `Fitur Laenya ${namebot}`},
{title: `🤖 Ai Commands`, rowId: ".? gpt", description: "Fitur Open-Ai"},
{title: `🍀 Beli Panel Kepada Sepuh`, rowId: ".buypanel", description: "Beli Panel Untuk Keperluan Running Bot Kamu"},
]
}, {
title: `𝕺𝖙𝖍𝖊𝖗𝖘 🥀`,
rows: [
{title: `✨ Own Commands`, rowId: ".? owner", description: "Kan Om Bukan Owner Jadi Gausah Di Klik Yah"},
{title: `📮 Please Read My Rules Bot`, rowId: ".rules"},
{title: `🚀 Ping`, rowId: ".speed", description: `Tes Kecepatan Respon ${namebot}`},
{title: `⏲️ Runtime ${namebot}`, rowId: ".runtime", description: "Bot Aktif Selama..."},
{title: `💻 Info ${namebot}`, rowId: ".infobot", description: "Info Tentang Bot"},
{title: `🎐 Ownernya ${namebot}`, rowId: ".owner", description: "Jangan Lupa Sapa Owner Ya Kack><"},
{title: `${rul} Source Code Clarissa-MD`, rowId: ".sc"},
] },
]
let psan = `_Note: Jangan Spam Jika Ingin Bot Tetap Aktif_`
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let rull = `
*Hi!, Need Help By Me?*
Yahoo Watashi ${namebot2}, Im
a Whatsapp Bot, For Purposes Such
as Making Stickers, Downloaders, And
More
 Thank You For Using My Service.
`
const listMessage = {
text: rull,
footer: `${dewi} Bantu Developer Bot Dengan Cara Donasi \nhttps://saweria.co/RullZY`,
mentions: await conn.parseMention(rull),
title: `${ucapan()}`,
buttonText: `Touch Here!`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(rull), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

		let url = `${pickRandom(['https://telegra.ph/file/f60b4acde6f2b1c2c0f4a.jpg', 'https://telegra.ph/file/945599b3a4b9dad4bcd3c.jpg', 'https://telegra.ph/file/d7048cb91f71458c390e0.jpg'])}`
		

		await conn.send3TemplateButtonImg(m.chat, url, text, wm, 'Sewa', '.sewa', 'Owner', '.owner', 'Thanks To', '.tqto', m)

	} catch (e) {
		conn.reply(m.chat, "Maaf, menu sedang error", m)
				throw e
	}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|list|rull|\?)$/i

handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Wes Esuk Kok Durung Turu?"
if (time >= 4) {
res = "Sugeng Enjang 🌅"
}
if (time >= 10) {
res = "Sugeng Sonten 🏙️"
}
if (time >= 15) {
res = "Sugeng Sonten 🌇"
}
if (time >= 18) {
res = "Sugeng Dalu 🌆"
}
if (time >= 22) {
res = "Sugeng Dalu 🌌"
}
return res
}
