const { allPrompts } = require('../data/prompt_data.js')

module.exports.getPrompt = function(message) {
    const randomPromptID = Math.floor(Math.random() * allPrompts.length);
    message.channel.send(allPrompts[randomPromptID]);
}