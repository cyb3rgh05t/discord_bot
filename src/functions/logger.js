const moment = require("moment");
const chalk = require("chalk");

module.exports = class Logger {
	static log(content, type = "log") {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		switch (type) {

			case "log": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "warn": {
				return console.log(`[${chalk.yellow(type.toUpperCase())}] | ${chalk.yellow(content)}`);
			}
			case "error": {
				return console.log(`[${chalk.red(type.toUpperCase())}] | ${chalk.red(content)}`);
			}
			case "debug": {
				return console.log(`[${chalk.blueBright(type.toUpperCase())}] | ${chalk.blueBright(content)}`);
			}
			case "cmd": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "event": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "buttons": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "prefix": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "modals": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			case "ready": {
				return console.log(`[${type.toUpperCase()}] | ${content}`);
			}
			default:
				throw new TypeError("Logger type must be either warn, debug, log, ready, cmd, buttons, modals or error.");
		}
	}
};