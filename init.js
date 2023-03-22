require('dotenv').config();// to use evnironment variables  in locan system
const path = require("path");

const {
    yoruToken: TOKEN,
    yoruID: clientID,
    adminID,
    mongodbURI: databaseURL,
    serverID: guildID,
    commandsDeployment,
} = process.env; //using evnironment variables 

const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ]
});

client.commands = new Collection();

const colors = {
    "black": "\u001b[30m",
    "red": "\u001b[31m",
    "green": "\u001b[32m",
    "yellow": "\u001b[33m",
    "blue": "\u001b[34m",
    "magenta": "\u001b[35m",
    "cyan": "\u001b[36m",
    "white": "\u001b[37m",
    "reset": "\u001b[0;1m"
};

//show Errors in color combination
console.showError = function (error) {
    console.colorLog({ para: `\n${error.name} : ${error.message}` });
    console.colorLog({ para: `File: ${__filename}` });
    console.colorLog({ para: `Line: ${error.stack.split('\n')[1].split(':')[1]}\n` });
    // console.colorLog({ para: error.stack });
}

//custom function to show output o terminal in color 
console.colorLog = function({ fun, comt, text, imp, title, para, link, border }){
    let txt = "";
    if (imp) txt += colors.red + imp + colors.reset;
    if (title) txt += colors.yellow + title + colors.reset;
    if (fun) txt += colors.cyan + fun + colors.reset;
    if (text) txt += colors.white + text + colors.reset;
    if (para) txt += colors.black + para + colors.reset;
    
    if (link) txt += colors.blue + link + colors.reset;
    if (comt) txt += colors.green + comt + colors.reset;
    if (border) txt += colors.magenta + border + colors.reset;
    console.log(txt);
}

const eventsPath =  path.join(__dirname, "events");
const commandsPath = path.join(__dirname, "commands");
module.exports = { client, TOKEN, clientID, adminID, databaseURL, guildID, commandsDeployment, eventsPath, commandsPath };