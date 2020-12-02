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
        prompt.getRandomPromptFromAll(message)
    }
})
