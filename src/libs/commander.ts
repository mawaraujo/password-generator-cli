const program = require('commander');

/**
 * Commander configuration set
 * @see https://github.com/tj/commander.js
 * @return {void} Initialize program metadata
 */
function init(): void {
  program
    .version('1.0.0')
    .description('Password generator tool')
    .option('-l, --length <number>', 'Length of password', '10')
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove numbers')
    .option('-ns, --no-symbols', 'Remove symbols')
    .option('-n, --name <string>', 'Name for saved password', 'unnamed')
    .parse();
}

module.exports = {
  commanderInit: init,
  command: program,
};
