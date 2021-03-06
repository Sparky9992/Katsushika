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
				caption: `*Katsushikaπ*

βππ²ππ°πΏπΆπ½ππΆπΌπ»: A reversed version of Asuna bot. 

   YOU WANT REPO Β―\_( Ν‘Β° ΝΚ Ν‘Β°)_/Β―...?

πππΆπ°π²π»ππ²: You may obtain a copy of the License at;
http://www.gnu.org/licenses/

(ππ‘π¨ πππππ₯π’ πππ‘ππ₯ππ π£π¨ππππ πππππ‘π¦π).
Β»π΅πΎπππππ 3.0 \n`,
			}
		);
	};
}
