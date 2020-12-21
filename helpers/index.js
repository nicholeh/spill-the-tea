/** Class of helper tools */
class Tools {
   /** Parses message from discord into commands */
   parseCommand(prefix, message) {
      const commandBody = message.content.slice(prefix.length)
      const args = commandBody.split(' ')
      const command = args.shift().toLowerCase()

      return {
         command,
         args
      }
   }
    /**
     * Generates a random number from a range
     * @param {Integer} max - The max number in the range
     * @return {Integer} - A random number from the range.
     */
     getRandomNumber(max) {
        return Math.floor(Math.random() * max)
     }
    /**
     * Adds emote before and after string.
     */
     wrapString(string, emote) {
        return `${emote} ${string} ${emote}`
     }
}

module.exports = new Tools()