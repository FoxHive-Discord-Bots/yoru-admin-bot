const { isChatCmd } = require("./isChatCmd.js");
const interactionType = (...args) => {
    //return 1 is reply of interaction is done 
    //check for next type if return value is 1 means interaction is not replyed
    if(!isChatCmd(...args)) return 1;
    return 0;//when none type match
}
module.exports = { interactionType }