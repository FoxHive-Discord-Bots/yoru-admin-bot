//isChatInputCommand interac
async function isChatCmd(interaction, client) {
    if (!interaction.isChatInputCommand()) return 1;//return 1 to tell that interaction is is still not replyed
    //otherwise undefined when interaction is replyed either by error or proper command
    const command = client.commands.get(interaction.commandName);//search command in list
    if (!command) {//command not found in commands folder list
        await interaction.reply({
            content: 'There is no such command specified for bot here !',
            ephemeral: true
        });
        return;
    }
    try { await command.execute(interaction); }//trying to exicute found command codded in commands folder  
    catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        });
    }
}

module.exports = { isChatCmd };
