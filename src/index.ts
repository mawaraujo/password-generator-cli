const COMMANDER = require('./libs/commander');
const CLIPBOARD = require('./libs/clipboardy');
const PRINT = require('./libs/chalk');
const WRITTER = require('./core/writter');

const generatePassword = require('./core/generate-password');

COMMANDER.commanderInit();

const opts: CommanderOptions = COMMANDER.command.opts();
const password: string = generatePassword(opts);

if(opts.save) {
  WRITTER.save(password, opts.name, function(response: string) {
    console.log(PRINT.green(response));
  });
}

CLIPBOARD.writeSync(password);

console.log(PRINT.blue('Generated password: ') + PRINT.bold(password));
console.log(PRINT.yellow('Password copied to clipboard'));
