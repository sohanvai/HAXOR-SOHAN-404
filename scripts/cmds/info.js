const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ArYAN",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ArYanInfo = {
				Botname: '⇛⌘ 𝐀𝐃𝐍𝐀𝐍 𝐑𝐎𝐁𝐎𝐓 𝐕 𝟐.𝟎 ⌘⇚',
				Prefix: '.',
				Owner: '𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡',
				Age: '18+',
				Tiktok: '@vex_adnan404',
				Whatsapp: '01853557896',
				Bio: '⎯⃝"🌻আ্ঁই্ঁছি্ঁরে্ঁ নে্ঁকা্ঁমু্ঁ ক্ঁর্ঁতে্ঁ 😼🙄🌺⎯͢⎯⃝🩷🐰',
				Relationship: 'ISLAM',
				Messenger: 'https://m.me/VEX.ADNAN.404',
				Instagram: 'NONE',
				Grouplink: 'https://m.me/j/Abbc61JOJV6zfuHs/'
			};

			const ArYan = 'https://i.imgur.com/4IcnUwQ.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ArYan, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'ArYan_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `
• Bot & Owner Info
╰‣ Bot Name: ${ArYanInfo.Botname}
╰‣ Bot Prefix: ${ArYanInfo.Prefix}
╰‣ Owner: ${ArYanInfo.Owner}
╰‣ Age: ${ArYanInfo.Age}
╰‣ Tiktok: ${ArYanInfo.Tiktok}
╰‣ Whatsapp: ${ArYanInfo.Whatsapp}
╰‣ relationship: ${ArYanInfo.Relationship}
╰‣ bio: ${ArYanInfo.Bio}
╰‣ Messenger: ${ArYanInfo.Messenger}
╰‣ Instagram: ${ArYanInfo.Instagram}
╰‣ Grouplink: ${ArYanInfo.Grouplink}`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
