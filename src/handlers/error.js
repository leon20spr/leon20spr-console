const error = {
    /**
     * To get a formatted error
     * @param {string} text 
     * @returns Format: [ERROR] This could be your text
     */
    create: function(text) {
        try {
            console.log(`\x1b[31m[ERROR] \x1b[0m${text}`);
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = error;