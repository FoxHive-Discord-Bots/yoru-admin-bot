const { Events } = require("discord.js");
const { interactionType } = require("./interactionType/index.js")
module.exports = {
    name: Events.InteractionCreate,
    async execute(...args) {
        console.colorLog({ fun: "\nEvent : ", text: "InteractionCreate" });
        interactionType(...args);
    }
}
