const information = {
    /**
     * To get a formatted info
     * @param {string} text 
     * @returns Format: [INFO] This could be your text
     */
    create: function(text) {
        try {
            console.log(`\x1b[34m[INFO] \x1b[0m${text}`);
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = information;