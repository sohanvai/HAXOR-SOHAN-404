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
				botname: '⇛⌘ 𝐀𝐃𝐍𝐀𝐍 𝐑𝐎𝐁𝐎𝐓 𝐕 𝟐.𝟎 ⌘⇚',
				prefix: '.',
				owner: '𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡',
				age: '18+',
				Tiktok: 'vex_adnan404',
				Whatsapp: '01853557896',
				bio: '⎯⃝"🌻আ্ঁই্ঁছি্ঁরে্ঁ নে্ঁকা্ঁমু্ঁ ক্ঁর্ঁতে্ঁ 😼🙄🌺⎯͢⎯⃝🩷🐰',
				Relationship: 'ISLAM',
				Messenger: 'MESSENGER LINK',
				Instagram: 'INSTAGRAM LINK'
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
╰‣ Bot Name: ${ArYanInfo.botname}
╰‣ Bot Prefix: ${ArYanInfo.prefix}
╰‣ Owner: ${ArYanInfo.owner}
╰‣ Age: ${ArYanInfo.age}
╰‣ Tiktok: ${ArYanInfo.tiktok}
╰‣ Whatsapp: ${ArYanInfo.whatsapp}
╰‣ relationship: ${ArYanInfo.relationship}
╰‣ bio: ${ArYanInfo.bio}
╰‣ Messenger: ${ArYanInfo.messenger}
╰‣ Instagram: ${ArYanInfo.Instagram}`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🪶', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
