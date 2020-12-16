const commandList = {
    'prompt': {
        'command': 'prompt',
        'helperText': 'Returns a single prompt. *Please note, NSFW prompts are marked with a :hot_pepper:.*',
        'args': {
            'abstract': 'Returns an abstract prompt.',
            'character': 'Returns a single prompt meant to help you define your character more.',
            'dialogue': 'Returns a single prompt focused on dialog between characters.',
            'holiday': 'Returns a :smiling_imp: or :angel: holiday themed prompt.',
            'situation': 'Returns a single prompt about a situation your character finds themselves in.',
            'spice': 'Returns a single prompt from the :hot_pepper: spice (aka NSFW) category.',
        }
    },
}

module.exports = { commandList }