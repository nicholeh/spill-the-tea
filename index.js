require("dotenv").config()
const { parseCommand } = require('./helpers/parseCommands')
const prompt = require('./commands/getPrompt')
const help = require('./commands/help.js')

const Discord = require('discord.js')

const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = '/'

client.on('message', (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const request = parseCommand(prefix, message)
    let messageToSend = ''

    if (request.command === 'help') {
        messageToSend = help.buildOutput()
    }

    if (request.command === 'prompt') {
        messageToSend = prompt.getPrompt(request.args)
    }

    message.channel.send(messageToSend)
})
