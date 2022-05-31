import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*MY GROUP*
「YOU'RE WELCOME」:\n\nhttps://chat.whatsapp.com/HG1ryMzymgxFik23tXkOOH`,
           MessageType.text
        ))
        const n = [
            './assets/images/Katsushika.jpeg','./assets/images/Katsushika_1.jpeg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )

        }
}
