let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Giftmu!`, m)
    if (args[0] == '298x' || args[0] == 'rulganteng' || args[0] == 'zx672' || args[0] == 'ABCLIMADASARNEGARA') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n500 Limit!\n\nPajak -10 limit', m)
    global.db.data.users[m.sender].limit += 500
    } else {
        conn.reply(m.chat, `*KODE GIFT TIDAK VALID!*\n\nSilahkan Hubungi Owner Untuk Beli Kode Gift Yang Valid Dengan Cara Ketik ${prefix}buygift Atau Dapatkan Kode Gift Secara Gratis Dengan Cara Berdaftar!`, m)
    }
}
handler.help = ['gift <kode>']
handler.tags = ['hadiah']
handler.command = /^(gift)$/i

handler.limit = 10

export default handler