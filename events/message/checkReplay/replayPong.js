function ping(msg){
    if (msg.content === 'ping') msg.reply({ content: "pong :upside_down: !" });
}
module.exports = { ping };