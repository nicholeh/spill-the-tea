const { parseCommand } = require('./helpers/parseCommands')
const prompt = require('./commands/getPrompt')

const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client()
client.login(config.BOT_TOKEN)

const prefix = '/'

client.on('message', (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const request = parseCommand(prefix, message)

    if(request.command === 'prompt') {
        if(request.args && request.args.includes('dialogue')) {
            prompt.getRandomPromptFromDialogue(message)
        }
        else if(request.args && request.args.includes('character')) {
            prompt.getRandomPromptFromCharacter(message)
        }
        else if(request.args && request.args.includes('situation')) {
            prompt.getRandomPromptFromSituation(message)
        }
        else if(request.args && request.args.includes('spice')) {
            prompt.getRandomPromptFromSpice(message)
        }
        else if(request.args && request.args.includes('abstract')) {
            prompt.getRandomPromptFromAbstract(message)
        } else {
            prompt.getRandomPromptFromAllWithSpice(message)
        }
    }
})
