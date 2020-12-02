const tools = require('../helpers/index')
const { allPrompts } = require('../data/prompt_data.js')

class Prompts {
    getRandomPrompt(list) {
        const randomID = tools.getRandomNumber(list.length)
        return list[randomID.toString()]
    }
    getRandomPromptFromAll(message) {
        const selectedPrompt = this.getRandomPrompt(allPrompts)
        message.channel.send(selectedPrompt);
    }
}

module.exports = new Prompts()