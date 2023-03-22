const { Events } = require("discord.js");

module.exports = {
    name: Events.Error,
    execute(error) {
        console.colorLog({ imp: "Error event is trigured" })
        console.showError(error);
    },
};