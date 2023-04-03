let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `
✧─────[ *Group Official* ]─────✧
 Group 1 :
${sgc}
✧──────────···──────────✧`
m.reply(str)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcwann$/i

export default handler