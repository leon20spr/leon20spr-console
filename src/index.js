const log = require("./handlers/log.js");
const information = require("./handlers/information.js");
const warning = require("./handlers/warning.js");
const error = require("./handlers/error.js");

const console = {
    log: log,
    information: information,
    warning: warning,
    error: error
}

exports = module.exports = console;