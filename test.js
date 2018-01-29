const rule34 = require('./index');
const { expect } = require('chai');
const { EOL } = require('os');
const { yellow, green, bold } = require('chalk');

describe('Rule34', () => {
    it('should return rule34', () => {
        expect(rule34).to.equal(
            EOL + EOL +
            "..." + EOL + EOL +
            yellow("Rule 34 of programming:") + EOL +
            "If it exists, it's on npm." + EOL + EOL +
            yellow("Rule 35 of programming:") + EOL +
            "If it doesn't exist, it will be added to npm." + EOL + EOL +
            "..." + EOL + EOL +
            green.bold("https://npmjs.org") + EOL
        );
    });
});