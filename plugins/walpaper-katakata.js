import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {

    let anu = await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/katakata?apikey=BetaBotz`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Walpaper Kata-kata', author, fimgb, [['next', '.walkatakata']], null, adReply)
}
handler.help = ['feets']
handler.tags = ['internet']
handler.command = /^(walkatakata)$/i
handler.limit = true

export default handler