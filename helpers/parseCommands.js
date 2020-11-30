module.exports.parseCommand = function (prefix, message) {
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()

    return {
        command,
        args
    }
}

// module.exports.parseCommand = parseCommand