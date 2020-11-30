const { parseCommand } = require('./helpers/parseCommands')
const { allPrompts } = require('./data/prompt_data')

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
        const randomPromptID = Math.floor(Math.random() * allPrompts.length);
        message.channel.send(allPrompts[randomPromptID]);
    }
})