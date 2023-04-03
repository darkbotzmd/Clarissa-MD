import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

let pe = await fetch(`https://betabotz-api.herokuapp.com/api/random/pantun?apikey=BetaBotz,`)
let xc = await pe.json()
  await conn.sendButton(m.chat, `*Quote:*
${pe}`, wm, null, [
                ['Next', `${usedPrefix + command}`],
            ], m)
            
}
handler.help = ['pan']
handler.tags = ['fun']
handler.command = /^pan$/i

export default handler