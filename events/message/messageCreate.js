const { Events } = require("discord.js");
const { checkReply } = require("./checkReplay/index.js");//different reply for different situation
require('dotenv').config();// to use evnironment variables in locan system
const { testingCh, testingPhase, clientID, adminID } = process.env;
// --------------------------------------------------
module.exports = {
    name: Events.MessageCreate,
    async execute(msg, client) {
      console.colorLog({ fun : "\nEvent : ", text: "MessageCreate"});
        if (msg.author.id === clientID) return;
        try {
            if (!msg.author.id === adminID) msg.reply({ content: "commands are not avaliable for U , because u don't have adin rights !" });
            if (testingPhase) {
                if (msg.channel.id === testingCh) {
                    checkReply(msg);
                } else {
                    msg.reply({ content: "type commands in channel : 'bot-testing channel' if u do not have that channel then asked for it from .." });
                }
            } else {
                checkReply(msg);
            }
        } catch (error) {
            console.showError(error);
            msg.reply({ content: `Error: App crashed in event 'MessageCreate'.` });
        }
    }
}

