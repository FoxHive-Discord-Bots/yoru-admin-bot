import { Events } from "discord.js";
// --------------------------------------------------
module.exports = {
    name: Events.MessageCreate,
    async execute(message, client) {
      console.colorLog({ title : "Event : ", text: "MessageCreate"});
        if (msg.author.id === clientID) return;
        try {
            if (msg.channelId === '1085522038116065281') {
                if (!msg.author.id === adminID) msg.reply({ content: "commands are not avaliable for U !" });
                if (msg.content === 'ping') msg.reply({ content: "pong :upside_down: !" });
            } else {
                msg.reply({ content: "type commands in channel : 'bot-testing' if u do not have that channel then asked for it from .." });
            }
        } catch (error) {
            showError(error);
            msg.reply({ content: `Error: App crashed in event 'MessageCreate'. File: ${__filename.split('/').pop()}` });
        }
    }
}

