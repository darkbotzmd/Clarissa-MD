// fix by zeltoria

import { mediafiredl } from '@bochilteam/scraper'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya?`
    let res = await fetch(`https://api.botcahx.biz.id/api/dowloader/mediafire?url=${args[0]}&apikey=af75443e`)
    let x = await res.json()
    let { url, url2, filename, ext, upload_date, filesize, filesizeH } = x
    let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${upload_date}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
    