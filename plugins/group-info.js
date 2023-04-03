let handler = async (m, { conn, isPublic, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'

    const { isBanned, welcome, detect, sWelcome, sBye, anticall, nsfw, premnsfw, autoresponder, viewonce, autoread, restrict, useDocument, stiker, autolevelup, whitelistmycontacts, self, premnsfwchat, document, autosticker, getmsg, nyimak, swonly, pconly, gconly, sPromote, sDemote, antiLinkTik, antiLinkTel, antiLinkIg, antiLinkHttp, antiLinkYt, antiLinkFb, antiVirtex, antiToxic, antiLinkGc, antiStiker, antiSpam, del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 Group Information 」*\n
*ID:* 
${groupMetadata.id}
*Name:* 
${groupMetadata.subject}
*Description:* 
${groupMetadata.desc?.toString() || 'unknown'}
*Total Members:*
${participants.length} Members
*Group Owner:* 
@${owner.split('@')[0]}
*Group Admins:*
${listAdmin}
*Group Settings:*
 
banned ${isBanned ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
welcome ${welcome ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antidelete ${del ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'} 
antivirtex ${antiVirtex ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antistiker ${antiStiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antispam ${antiSpam ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antitoxic ${antiToxic ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinkgc ${antiLinkGc ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinktik ${antiLinkTik ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinktel ${antiLinkTel ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinkyt ${antiLinkYt ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinkhttp ${antiLinkHttp ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinkig ${antiLinkIg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
antilinkfb ${antiLinkFb ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
anticall ${anticall ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
autosticker ${stiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
autolevelup ${autolevelup ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕  
autoread ${autoread ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
document ${useDocument ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
autoresponder ${autoresponder ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
nsfw ${nsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
getmsg ${getmsg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
premnsfw ${premnsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
gconly ${gconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
nyimak ${nyimak ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕ 
pconly ${pconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
${status} ${self ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'}⮕ 
restrict ${restrict ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  
swonly ${swonly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc)|igc|gci|gcid|idgc)$/i

handler.group = true

export default handler