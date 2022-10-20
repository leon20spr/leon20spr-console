const warning = {
    /**
     * To get a formatted warning
     * @param {string} text 
     * @returns Format: [WARN] This could be your text
     */
    create: function(text) {
        try {
            console.log(`\x1b[33m[WARN] \x1b[0m${text}`);
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = warning;