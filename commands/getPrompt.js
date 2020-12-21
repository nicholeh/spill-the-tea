const tools = require('../helpers/index')
const { allPrompts, allPromptsWithSpice, dialogue_prompts, character_prompts, situation_prompts, spice_prompts, abstract_prompts, holiday_prompts } = require('../data/prompt_data.js')

const prompt_categories = {
    'dialogue': tools.shuffle(dialogue_prompts),
    'character': tools.shuffle(character_prompts),
    'situation': tools.shuffle(situation_prompts),
    'spice': tools.shuffle(spice_prompts),
    'abstract': tools.shuffle(abstract_prompts),
    'holiday': tools.shuffle(holiday_prompts),
}

const everyPrompt = tools.shuffle(allPromptsWithSpice)

const promptList = {
    'all': 0,
    'dialogue': 0,
    'character': 0,
    'situation': 0,
    'spice': 0,
    'abstract': 0,
    'holiday': 0,
}

const prompt_error = {
    'tooMany': 'You have passed in too many arguments. `/prompt` only takes one argument. To see the available options, use the `/help` command.',
    'notACategory': 'I\'m sorry. I don\'t recognize that category. To see the available options, use the `/help` command.',
    'how': 'Congratulations! :partying_face: I did not anticipate this scenario and therefore I don\'t have a good error message.'
}

class Prompts {
    getRandomPrompt(topic, list) {
        const currentIndex = promptList[topic]

        if(promptList[topic] < list.length) {
            promptList[topic]++
            return list[currentIndex]
        }

        promptList[topic] = 0
        return list[0]
    }
    getPrompt(args) {
        if(args && args.length > 1) {
            return prompt_error.tooMany
        }

        if(args && args.length === 0) {
            return this.getRandomPrompt('all', everyPrompt)
        }

        if(args && args.length === 1) {
            return Object.keys(prompt_categories).includes(args[0]) ? this.getRandomPrompt(args[0], prompt_categories[args[0]]) : prompt_error.notACategory
        }

        return prompt_error.how
    }
}

module.exports = new Prompts()