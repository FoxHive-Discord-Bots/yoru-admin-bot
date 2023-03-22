
const color = require('./color.js');
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
color({border:"---------------------"});
color({ imp: '\nTOKEN : ' + TOKEN + '\nguildID : ' + guildID + '\nclientID : ' + clientID + '\nadminID : ' + adminID + '\nmongodbURI : ' + databaseURL });
// -----------------------------------------------------------------------------
function showError(error) {
    color({ para: `\n${error.name} : ${ error.message }` });
    color({ para: `File: ${__filename}` });
    color({ para: `Line: ${error.stack.split('\n')[1].split(':')[1]}\n` });
    // color({ para: error.stack });
}
client.once(Events.ClientReady, () => {
    color({ title : "Event : ", text: "ClientReady"});
    color({ title:'Name : ', text: `${client.user.tag}` });
    color({ title:'Status : ', text: `online` });
    color({ comt: 'Wating for Event ...(/)' });
});

client.on(Events.MessageCreate, (msg) => {
    color({ title : "Event : ", text: "MessageCreate"});
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
    color({imp: "Error event is trigured"})
    showError(err);
})
// -----------------------------------------------------------------------------
client.login(TOKEN);
color({ border: "---------------------" });