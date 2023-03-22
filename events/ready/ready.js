const { Events } = require("discord.js");
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.colorLog({ title: "Event : ", text: "ClientReady" });
        console.colorLog({ title: 'Name : ', text: `${client.user.tag}` });
        console.colorLog({ title: 'Status : ', text: `online` });
    },
};