const allPrompts = []

const dialogue_prompts = [
    'Two characters are strategizing a plan.',
    'Two characters are arguing.',
    'A character has professed their feelings for another character.',
    'Two characters are discussing another character who is not present.',
    'A character is trying to get information from another.',
    'A character is trying to get your character to express how they feel about something.',
    'What do you need right now, more than anything?',
]

const character_prompts = [
    'Your character is robbed.',
    'Your character is injured.',
    'Your character is at a party.',
    'Your character is being held captive.',
    'Your character witnesses an injustice.',
    'Two characters want the same item but there is only one.',
    'Someone tells your character no.',
    'Someone insults your character.',
    'Someone questions your character’s motives',
    'Describe the moment when your character knows when they are in love. i.e. I know I\'m in love when _____________.',
    'What is your character lying to themselves about?',
]

const organize_these = [
    'Is there anyone who\'s changed your life but doesn\'t know it?',
    'Write a scene that captures the sadness of the word "almost"',
    'well that was a kiss i\'ll never forget',
    'a scene depicting unrequited love',
    'one character decides to follow/stalk another',
    'one of your characters goes missing',
    'write off this dialog "Don’t trust him.”'
]

const perception = [
    'Do you think I intimidate others? Why or why not?',
    'What about me is most strange or unfamiliar to you?',
    'What compliment do you think I hear the most?',
    'What about me intrigues you?',
    'If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?',
    'Do I look kind? Explain.',
    'Character B makes an assumption about Character A.',
    'Do you think I fall in love easily? Why or why not?',
    'What was your first impression of me?',
    'What is my body language telling you right now?',
    'Do I remind you of anyone?',
    'Do you think I\'ve ever checked an ex\'s phone for evidence?',
    'What is the first thing you noticed about me?',
    'What do you think is the hardest part of what I do for a living?',
]

const connection = [
    'Write your Character\'s happiest memory.',
    'How would you describe the feeling of being in love for your character?',
    'Write the last lie your character told to someone important to them',
    'Someone asks your character how they are doing. What would it look like if they answered truthfully?',
    'What does your character crave more of? Love? Attention? What else?',
    'What dream did your character let go of?',
    'Write a moment where your character is missing someone.',
    'What lesson took the longest for your character to unlearn? Write it as a dialogue between characters.',
    'What is your characters earliest recollection of happiness?',
    'How does one earn your character\'s vulnerability? Have I earned it? How can I earn more?',
    'Have you ever told someone I Love you but didn\'t mean it? Why?',
    'What are you still trying to prove to yourself?',
    'What was the moment your character realized they weren\'t invincible?',
    'Are you lying to yourself about anything?',
    'What is the most pain you have ever been in that wasn\'t physical?',
    'What part of your life works? What part of your life hurts?',
    'What is your first love\'s name and the reason you fell in love with him/her?',
    'What question are you trying to answer most in your life right now?',
]

const reflection = [
    'When this conversation is over, what will you remember about me?',
    'Why do you think we met?',
    'What do you think my weakness is?',
    'What do you think I fear the most?',
    'What do you think I should know about myself that perhaps I\'m unaware of?',
    'Do you believe everyone has a calling? Have I found mine?',
    'What do you recommend I let go of?',
    'What do you think our most important similarity is?',
    'Character A pushes Character B to do something outside of their comfort zone',
    'Character A admits something to another character.',
    'What parts of yourself do you see in me?',
    'How would you describe me to a stranger?',
    'When in this game did you feel most connected to me?',
    'What would make you feel closer to me?',
    'What about me surprised you?',
    'Write a character receiving their perfect gift.',
    'What do you admire most about me?',
    'What about me is hardest for you to understand?',
    'What am I most qualified to give advice about?',
    
]

allPrompts.push(...dialogue_prompts, ...character_prompts, ...organize_these, ...perception, ...connection, ...reflection)

module.exports = { allPrompts, dialogue_prompts, character_prompts, perception, connection, reflection }