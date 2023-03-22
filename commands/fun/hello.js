const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Replies with olleh !"),
    async execute(command) {
        await command.reply("olleh !");
    },
};