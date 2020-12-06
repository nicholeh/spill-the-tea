const { parseCommand } = require('./helpers/parseCommands')
const prompt = require('./commands/getPrompt')
const help = require('./commands/help.js')

const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client()
// client.login(config.BOT_TOKEN)
client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = '/'

client.on('message', (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const request = parseCommand(prefix, message)

    if (request.command === 'help') {
        const helpText = help.buildOutput()
        message.channel.send(helpText);
    }

    if (request.command === 'prompt') {
        const category = request.args[0]
        if(request.args && request.args.length > 1) {
            message.channel.send('You have passed in too many arguments. `/prompt` only takes one argument. To see the available options, use the `/help` command.')
        }
        else if(request.args && request.args.length === 0) {
            prompt.getRandomPromptFromAllWithSpice(message)
        }
        else if(request.args) {
            if (category === 'dialogue') {
                prompt.getRandomPromptFromDialogue(message)
            }
            else if (category === 'character') {
                prompt.getRandomPromptFromCharacter(message)
            }
            else if (category === 'situation') {
                prompt.getRandomPromptFromSituation(message)
            }
            else if (category === 'spice') {
                prompt.getRandomPromptFromSpice(message)
            }
            else if (category === 'abstract') {
                prompt.getRandomPromptFromAbstract(message)
            } else {
                message.channel.send('I\'m sorry. I don\'t recognize that category. To see the available options, use the `/help` command.')
            }
        } else {
            message.channel.send('Congratulations! :partying_face I did not anticipate this scenario and therefore I don\'t have a good error message.')
        }
        
    }
})
