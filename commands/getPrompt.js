const tools = require('../helpers/index')
const { allPrompts, allPromptsWithSpice, dialogue_prompts, character_prompts, situation_prompts, spice_prompts, abstract_prompts, holiday_prompts } = require('../data/prompt_data.js')

const prompt_categories = {
    'dialogue': dialogue_prompts,
    'character': character_prompts,
    'situation': situation_prompts,
    'spice': spice_prompts,
    'abstract': abstract_prompts,
    'holiday': holiday_prompts,
}

const prompt_error = {
    'tooMany': 'You have passed in too many arguments. `/prompt` only takes one argument. To see the available options, use the `/help` command.',
    'notACategory': 'I\'m sorry. I don\'t recognize that category. To see the available options, use the `/help` command.',
    'how': 'Congratulations! :partying_face: I did not anticipate this scenario and therefore I don\'t have a good error message.'
}

class Prompts {
    getRandomPrompt(list) {
        const randomID = tools.getRandomNumber(list.length)
        return list[randomID.toString()]
    }
    getPrompt(args) {
        if(args && args.length > 1) {
            return prompt_error.tooMany
        }

        if(args && args.length === 0) {
            return this.getRandomPrompt(allPromptsWithSpice)
        }

        if(args && args.length === 1) {
            return Object.keys(prompt_categories).includes(args[0]) ? this.getRandomPrompt(prompt_categories[args[0]]) : prompt_error.notACategory
        }

        return prompt_error.how
    }
}

module.exports = new Prompts()