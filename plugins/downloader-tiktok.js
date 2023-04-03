import fetch from "node-fetch";

let handler = async (m, { conn, command, args, usedPrefix }) => {
	
	conn.tiktok = conn.tiktok ? conn.tiktok : {};
	if (m.sender in conn.tiktok) return;
	if (!args[0])
		throw `Linknya?`;
	if (!/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(args[0]))
		throw `Link Salah!`;
	else conn.tiktok[m.sender] = true;
	m.reply("_Sedang Di Proses, Mohon Tunggu_");
	try {
		const Fetch = await fetch(
			global.API("rose", "/downloader/tiktok", { url: args[0] }, "apikey")
		);
		const json = await Fetch.json();
		await conn.sendFile(m.chat, json.download.nowm, "", "", m);
	} catch {
		m.reply("Fitur Error");
	} finally {
		conn.tiktok[m.sender] ? delete conn.tiktok[m.sender] : false;
	}
};
handler.help = ["tiktok", "tiktod", "tt"];
handler.tags = ["downloader"];
handler.command = ["tiktok", "tiktod", "tt"];
export default handler;
