/** Class of helper tools */
class Tools {
    /**
     * Generates a random number from a range
     * @param {Integer} max - The max number in the range
     * @return {Integer} - A random number from the range.
     */
     getRandomNumber(max) {
        return Math.floor(Math.random() * max)
     }
}

module.exports = new Tools()