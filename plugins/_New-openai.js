//By MasRul
import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fs from "fs"
let handler = async (m, { conn, text }) => {
if (!text) throw `[!] Nyari Apa Bang?\n Contoh: .ai Siapakah Sesepuh Manusia?`
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai', 'openai']
handler.tags = ['gpt']
handler.command = /^(ai|openai)$/i
export default handler