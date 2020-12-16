const allPrompts = []
const allPromptsWithSpice = []
const holiday_prompts = []

const dialogue_prompts = [
    'Two of your characters are in trouble and have to come up with a plan.',
    'Two characters are arguing.',
    '*\"How do you feel about me? Because I am in love with you.\"* A character professes how they feel about your character.',
    'Your character can\'t take it anymore. Tell their love interest how they truly feel.',
    '\"What do you think about him/her/them?\" Two characters discuss another character who is not present.',
    '*\"Tell me what you know.\"* A character is trying to get information from another.',
    '*\"I can\'t help you if you won\'t talk to me\"* A character is trying to get your character to express how they feel about something.',
    '*\"What do you need right now, more than anything?\"* A character is upset and your character doesn\'t know what to do.',
    '*\"I\'m sorry, but I don\'t feel the same way about you.\"*',
    '*\"Don\’t trust them.\"*',
    '*\"What compliment do you think I hear the most?\"* How does a character perceive the other?',
    '*\"What about me intrigued you when we met?\"*',
    '*\"What was your first impression of me?\"*',
    '*\"Do I remind you of anyone?\"*',
    '*\"What is the first thing you noticed about me?\"*',
    '*\"What do you think is the hardest part of what I do for a living?\"* How does one character perceive the other\'s workload?',
    'What lesson took the longest for your character to unlearn? Write it as a dialogue between characters.',
    'Your character tells a lie to someone important to them.',
    '*\"What are you still trying to prove to yourself?\"* Two characters get into an argument over another\'s behaviour',
    '*\"You are lying to yourself.\"* Two characters get into an argument.',
    '*\"What is your first love\'s name and the reason you fell in love with him/her?\"* Your character and their love interest talk about the past.',
    'What part of your character\'s life is working? What part of their life hurts? Write a dialogue between two characters where they are vulnerable about what is good or hard about their life.',
    '*\"Do you believe everyone has a calling?\"* A character struggles to find their purpose and confides in another.',
    '*\"What do you admire most about me?\"*',
    '*\"What about me is hardest for you to understand?\"*',
    'What is your character most qualified to give advice about? Write a dialogue where they try to prevent another character from making the same mistakes.',
]

const character_prompts = [
    'Pick out a previous scene you have written of a conversation between two characters. What does one of the characters remember most about the conversation? Write their inner dialogue as they recall it.',
    'Two characters want the same item but there is only one.',
    'Someone tells your character no.',
    'Someone insults your character. How do they react?',
    'Someone questions your character’s motives. How do they react?',
    'Write a character\'s inner monologue during the moment they realize they are in love.',
    'What is your character lying to themselves about? Another character confronts them about it.',
    'Is there anyone who changed your character\'s life that doesn\'t know it? Write your character either telling that person or describing how much that character means to them to someone else.',
    'Your character has become increasingly obsessed with something or someone. Write their inner monologue as the object of their obsession begins to consume them.',
    '*\"Do you think I intimidate others? Why or why not?\"* What does one character perceive about the other?',
    'Your characters have evolved during their journey. What feels strange or unfamiliar now to your character?',
    'Does your character appear to be kind? Harsh? Or like a pushover? Describe your character from someone else\'s point of view.',
    '*\"Do you think I fall in love easily?\"* What does one character perceive about the other?',
    'What cause does your character passionately advocate for or against?',
    'Your character finds themselves suspicious of someone they thought they trusted and have to decide whether to trust them or find evidence to validate their suspicion.',
    'How would your character describe the feeling of being in love to another?',
    'Someone asks your character how they are doing. What would it look like if they answered truthfully?',
    'What does your character crave more of? Love? Attention? What else?',
    'What dream did your character let go of?',
    'Write a moment where your character is missing someone.',
    'What is your characters earliest recollection of happiness?',
    'How does one earn your character\'s vulnerability? Has their love interest earned it? How can they earn it?',
    'Your character tells someone \"I love you\" but doesn\'t mean it? Why?',
    'What was the moment your character realized they weren\'t invincible?',
    'What is the most pain your character has ever been in that wasn\'t physical? Heartbreak, grief, etc. Write the moment they felt it for the first time.',
    'What question is your character trying to answer most in their life right now? Write their inner monologue.',
    '*\"Why do you think we met?\"*',
    '*\"What do you think my weakness is?\"* Write one character\'s perception of another.',
    '*\"What do you think I fear the most?\"* Write one character\'s perception of another.',
    '*\"What do you recommend I let go of?\"* Write one character\'s perception of another.',
    'Character A admits something to another character.',
    '*\"What parts of yourself do you see in me?\"* Write one character\'s perception of another.',
    'What does one character know about another that perhaps that character is unaware of?',
    'How would once character describe the other to a stranger?',
    'What does one character need from another that would make them feel closer to them?',
    'Write the moment when one character learns something that surprises them about another character.',
]

const situation_prompts = [
    'A character is robbed.',
    'A character is injured.',
    'A character is at a party. Where do you find them? What are they doing?',
    'A character is being held captive. How do they react?',
    'A character witnesses an injustice that goes against their moral beliefs. What do they do?',
    'One character decides to follow/stalk another.',
    'One of your characters goes missing.',
    'Two characters exchange presents. What do they get each other?',
    'Character B makes an assumption about Character A.',
    'Character A pushes Character B to do something outside of their comfort zone',
    'Write the moment when one character feels the most connected to another.',
    'Write a character receiving their perfect gift.',

]

const spicy_prompts = [
    '*\"Well that was a kiss i\'ll never forget\"*',
    'Two characters are slowly kissing. One breaks the kiss to say something, staying so close that they’re murmuring into the other’s mouth.',
    'Your characters are moving around while kissing, stumbling over things, pushing each other back against the wall/onto the bed.',
    'After building up so much tension, your character is kissing the other so desperately that their whole body curves into the other person’s, craving them.',
    'Instead of pushing them away, a character throws their arms around the other person, holding them close while they kiss.',
    'Wandering hands on the other person’s back, fingertips pressing under their top, drawing gentle circles against that small strip of bare skin that makes them break the kiss with a gasp.',
    'Lazy morning kisses before they’ve even opened their eyes, still mumbling half-incoherently, not wanting to wake up.',
    'Routine kisses where the other person presents their cheek/forehead for the hello/goodbye kiss without even looking up from what they’re doing.',
    'Your character is kissed by their love interest for the first time. They cannot open their eyes for a few moments afterward from the shock.',
    'The love interest gives your character one small kiss before pulling away, leaving them wanting more.',
    'As your characters are arguing, one is staring at the other\'s lips, trying not to kiss them, before finally giving in.',
    'A character stops the kiss to whisper, *\"I\'m sorry, are you sure you-\"* and the other character answers by kissing them more.',
    'A hoarse whisper *\"kiss me\"*.',
    'A soft kiss, before pulling away to leave a trail of light kisses down their neck.',
    'Starting with a kiss meant to be gentle, ending up in passion.',
    'A gentle *\"I love you\"* whispered after a soft kiss, followed immediately by a deeper kiss.',
    'Your character is visibly upset, pacing the room. The other stops them, kissing their lips/nose/forehead.',
    'Your character finds themselves sitting in the other’s lap.',
    'Light kisses from behind meant to distract the other person from whatever they were intently doing.',
    'Top of head kisses as the love interest walks by.',
    'Lying there together, they didn\'t realize how thin the walls were. Listening to the noises from the other room, each character\'s mind wanders to the person beside them.',
    'Your character bites their lip as they look over the other.',
    'They tugged at the cloth, tearing off the shirt when it wouldn\'t give.',
    'He stood before her and she couldn\'t help but notice it was bigger than she thought it would be.',
    'Pushed up against the wall, all they could think about was how close they were.',
    '*\"How hard do you like it?\"*',
    'No one was looking.',
    'After walking into the room, they froze at the scene before them.',
    'The corridor was too narrow for two people.',
    'He felt a twitch in his pants despite himself.',
    'When the lights came back…',
    '*\"Do you need some help?\"* Suddenly, I was aware of how small the space was.',
    'I got on my knees…',
    'Pulling some rope from the drawer, they playfully held it up for the other to see.',
    'It triggered her gag reflex.',
    '*\"Show me what you want.\"*'
]

const abstract_prompts = [
    'Write a scene that captures the sadness of the word "almost"',
    'Write a scene with a focus on what a character\'s body language is telling the other.',
    'Write a scene where two characters only communicate through body language.'
]

const holiday_naughty = [
    'Two characters are broken down on the side of the road during a frigid snowstorm.',
    'After being snowed in, two characters must find a way to entertain themselves.',
    'A sexy Santa\'s Elf appears on Christmas Eve. Bringing toys.',
    'On a cold Winter\'s night, a sexy ghost appears.',
    'There\'s a fireplace, a fur rug, and a magical brew of eggnog that seems to turn even the most enemies into lovers',
    'Oh, no! My fingers are covered in icing!',
    'An office party goes wrong.... in the best way.',
    'Chestnuts roast by an open fire.',
    'During a girls\' night in, there\'s a knock at the door. Santa and his dirty, dirty elves have arrived. (Strippers. They\'re strippers!)',
]

const holiday_nice = [
    'A holiday meal goes terribly wrong.',
    'Your character seeks out the most perfect gift for a loved one.',
    'Two Carolers have a bit of rivalry competition',
    'A sudden snowball fight happens in the unlikeliest of places',
    'A character opens up a surprising Christmas gift',
    'A holiday party amongst friends turns weird when a guy named Santa appears. He even acts like him, too.',
    'Two characters meet while picking out a tree',
    'A character shows up at a holiday gathering with a fake date',
]

const spice_prompts = spicy_prompts.map( i => `:hot_pepper: ${i}`)
const holiday_naughty_prompts = holiday_naughty.map( i => `:smiling_imp: ${i}`)
const holiday_nice_prompts = holiday_nice.map( i => `:angel: ${i}`)

allPrompts.push(...dialogue_prompts, ...character_prompts, ...situation_prompts, ...abstract_prompts)
allPromptsWithSpice.push(...allPrompts, ...spice_prompts)
holiday_prompts.push(...holiday_naughty_prompts, ...holiday_nice_prompts)

module.exports = { allPrompts, allPromptsWithSpice, dialogue_prompts, character_prompts, situation_prompts, spice_prompts, abstract_prompts, holiday_prompts }