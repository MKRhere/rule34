const { yellow, green, bold } = require('chalk')
const { EOL } = require('os')

module.exports = (
	EOL + EOL +
	"..." + EOL + EOL +
	yellow("Rule 34 of programming:") + EOL +
	"If it exists, it's on npm." + EOL + EOL +
	yellow("Rule 35 of programming:") + EOL +
	"If it doesn't exist, it will be added to npm." + EOL + EOL +
	"..." + EOL + EOL +
	green.bold("https://npmjs.org") + EOL
)