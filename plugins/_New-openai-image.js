import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
        
            if (!text) throw (`Membuat gambar dari AI.\n\nContoh:\n .Farhan kebab ireng`);
            const configuration = new Configuration({
              apiKey: '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'
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
        
            //console.log(response.data.data[0].url)
conn.send3TemplateButtonImg(m.chat, response.data.data[0].url, 'Ini Resultnya Kak', wm, 'SewaBot', '.sewabot', 'Owner', '.owner', 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ➠', '.menu', m)
}
handler.help = ['ai-image']
handler.tags = ['gpt']
handler.command = /^(aiimg)$/i
export default handler