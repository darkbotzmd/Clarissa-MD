let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
「 *LIST HARGA PANEL LUVYN* 」

📮 *PAKET G1*
RAM 1GB CPU 30%
_RP_ 5K/BULAN


📮 *PAKET G2*
RAM 2GB CPU 60%
_RP_ 10K/BULAN


📮 *PAKET G3*
RAM 3GB CPU 80%
_RP_ 16K/BULAN


📮 *PAKET G4*
RAM 4GB CPU 110%
_RP_ 20K/BULAN


📮 *PAKET G5*
RAM 5GB CPU 140%
_RP_ 25K/BULAN


📮 *PAKET G6*
RAM 6GB CPU 170%
_RP_ 30K/BULAN


📮 *PAKET G7*
RAM 7GB CPU 200%
_RP_ 40K/BULAN


✨ *PAKET G8*
*UNLIMITED*
_RP_ 50K/BULAN

Kunjungi Juga Webnya
https://panel.luvyn-store.my.id

Collaboration By
*Rei X MasRull*
`
const sections = [
   {
	title: `${htjava} Panel ✦-------`,
	rows: [
	    {title: `📮 ORDER PAKET G1`, rowId: '.buyer *Paket:* G1 • Panel'},
	    {title: `📮 ORDER PAKET G2`, rowId: '.buyer *Paket:* G2 • Panel'},
	{title: `📮 ORDER PAKET G3`, rowId: '.buyer *Paket:* G3 • Panel'},
	{title: `📮 ORDER PAKET G4`, rowId: '.buyer *Paket:* G4 • Panel'},
	{title: `📮 ORDER PAKET G5`, rowId: '.buyer *Paket:* G5 • Panel'},
	{title: `📮 ORDER PAKET G6`, rowId: '.buyer *Paket:* G6 • Panel'},
	{title: `📮 ORDER PAKET G7`, rowId: '.buyer *Paket:* G7 • Panel'},
	{title: `✨ ORDER PAKET G8`, rowId: '.buyer *Paket:* G8 (UNLIMITED) • Panel'},
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: namebot2,
  buttonText: "ORDER PANEL!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['buypanel', 'premium']
handler.tags = ['main']
handler.command = /^(buy(panel)?|premium)$/i

export default handler
