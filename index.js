console.colorLog = require('./color.js');
const {
    yoruToken: TOKEN,
    yoruID: clientID,
    adminID,
    mongodbURI: databaseURL,
    serverID : guildID
} = process.env; //using gitpod evnironment variables

const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ]
});
console.clear();
console.colorLog({border:"---------------------"});
console.colorLog({ imp: '\nTOKEN : ' + TOKEN + '\nguildID : ' + guildID + '\nclientID : ' + clientID + '\nadminID : ' + adminID + '\nmongodbURI : ' + databaseURL });
// -----------------------------------------------------------------------------
function showError(error) {
    console.colorLog({ para: `\n${error.name} : ${ error.message }` });
    console.colorLog({ para: `File: ${__filename}` });
    console.colorLog({ para: `Line: ${error.stack.split('\n')[1].split(':')[1]}\n` });
    // console.colorLog({ para: error.stack });
}
client.once(Events.ClientReady, () => {
    console.colorLog({ title : "Event : ", text: "ClientReady"});
    console.colorLog({ title:'Name : ', text: `${client.user.tag}` });
    console.colorLog({ title:'Status : ', text: `online` });
    console.colorLog({ comt: 'Wating for Event ...(/)' });
});

client.on(Events.MessageCreate, (msg) => {
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
})

client.on(Events.Error, (err) => {
    console.colorLog({imp: "Error event is trigured"})
    showError(err);
})
// -----------------------------------------------------------------------------
client.login(TOKEN);
console.colorLog({ border: "---------------------" });