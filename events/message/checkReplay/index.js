const {ping} = require("./replayPong.js");
function checkReply(msg){
    ping(msg);
}
module.exports = { checkReply }