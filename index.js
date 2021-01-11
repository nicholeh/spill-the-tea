require("dotenv").config()
const tools = require('./helpers/index.js')
const prompt = require('./commands/getPrompt')
const help = require('./commands/help.js')

const Discord = require('discord.js')

const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = '/'

const commands = ['help', 'prompt']

client.on('message', (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const request = tools.parseCommand(prefix, message)
    let messageToSend = ''

    if (request.command === 'help') {
        messageToSend = help.buildOutput()
    }

    if (request.command === 'prompt') {
        messageToSend = prompt.getPrompt(request.args)
    }

    if (!commands.includes(request.command)) {
        messageToSend = 'Sorry that is not one of my available commands. Please type `/help` to view available commands.'
    }

    message.channel.send(messageToSend)
})
