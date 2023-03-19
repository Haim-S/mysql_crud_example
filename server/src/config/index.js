
const defaultConfig = require("./default.json");
const envirmentConfig = require(`./env/${process.env.NODE_ENV}`);
const finalConfig = {...defaultConfig, ...envirmentConfig}
module.exports = finalConfig;