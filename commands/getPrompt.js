const tools = require('../helpers/index')
const { allPrompts, allPromptsWithSpice, dialogue_prompts, character_prompts, situation_prompts, spice_prompts, abstract_prompts } = require('../data/prompt_data.js')

class Prompts {
    getRandomPrompt(list) {
        const randomID = tools.getRandomNumber(list.length)
        return list[randomID.toString()]
    }
    getRandomPromptFromAll(message) {
        const selectedPrompt = this.getRandomPrompt(allPrompts)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromAllWithSpice(message) {
        const selectedPrompt = this.getRandomPrompt(allPromptsWithSpice)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromDialogue(message) {
        const selectedPrompt = this.getRandomPrompt(dialogue_prompts)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromCharacter(message) {
        const selectedPrompt = this.getRandomPrompt(character_prompts)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromSituation(message) {
        const selectedPrompt = this.getRandomPrompt(situation_prompts)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromSpice(message) {
        const selectedPrompt = this.getRandomPrompt(spice_prompts)
        message.channel.send(selectedPrompt);
    }
    getRandomPromptFromAbstract(message) {
        const selectedPrompt = this.getRandomPrompt(abstract_prompts)
        message.channel.send(selectedPrompt);
    }
}

module.exports = new Prompts()