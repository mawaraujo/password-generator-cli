const ALPHA: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY';
const NUMBERS: string = '0123456789';
const SYMBOLS: string = '!@#$%&/()~^+=-_';

/**
 * @param {number} length
 * @param {string} chars
 * @return {string} - Build a new password
 */
function build(length: number, chars: string): string {
  let password = '';

  for (let index = 0; index < length; index++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

/**
 *
 * @param {CommanderOptions} args - CLI options
 * @return {string} - Generate a new password
 */
function generate(args: CommanderOptions): string {
  let chars = ALPHA;

  args.numbers === true ? (chars += NUMBERS) : '';
  args.symbols === true ? (chars += SYMBOLS) : '';

  return build(parseInt(args.length), chars);
}

module.exports = generate;
