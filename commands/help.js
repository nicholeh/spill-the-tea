const { commandList } = require('./index.js')

class Help {
    buildOutput() {
        const output = []
        output.push(
            '**Spill the Tea Commands**\n' +
            `**/${commandList.prompt.command}** - ${commandList.prompt.helperText}\n\n` +
            `*You can pass in one of the following arguments to get prompts from a specific category.*\n` +
            '*For example: `/prompt character`*'
        )
        Object.entries(commandList.prompt.args).map(([key, value]) => {
            output.push(
                `**${key}** - ${value}`
            )
        })
        return output
    }
}

module.exports = new Help()