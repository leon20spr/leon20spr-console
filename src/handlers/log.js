const log = {
    /**
     * To get a formatted log
     * @param {string} text 
     * @returns Format: [LOG] This could be your text
     */
    create: function(text) {
        try {
            console.log(`\x1b[32m[LOG] \x1b[0m${text}`);
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = log;