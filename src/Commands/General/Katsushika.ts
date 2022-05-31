/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "Katsushika",
			description: "Displays the info of Katsushika bot",
			category: "general",
			usage: `${client.config.prefix}asuna`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const becky =
			"https://www.linkpicture.com/q/Katsushika_1.jpeg";
		return void this.client.sendMessage(
			M.from,
			{ url: becky },
			MessageType.image,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.jpeg,
				caption: `*Katsushika🚀*

⚜𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: A reversed version of Asuna bot. 

   YOU WANT REPO ¯\_( ͡° ͜ʖ ͡°)_/¯...?

📑𝗟𝗶𝗰𝗲𝗻𝘀𝗲: You may obtain a copy of the License at;
http://www.gnu.org/licenses/

(𝗚𝗡𝗨 𝗔𝗙𝗙𝗘𝗥𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗣𝗨𝗕𝗟𝗜𝗖 𝗟𝗜𝗖𝗘𝗡𝗦𝗘).
»𝖵𝖾𝗋𝗌𝗂𝗈𝗇 3.0 \n`,
			}
		);
	};
}
