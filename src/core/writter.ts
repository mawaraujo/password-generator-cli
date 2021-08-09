const PATH = require('path');
const FS = require('fs');
const OS = require('os');

/**
 *
 * @param {string} password
 * @param {string|null} name
 * @param {Function} callback
 * @return {void}
 */
function savePasswordToFile(
  password: string = '',
  name: string | null = null,
  callback: Function,
): void {
  FS.open(PATH.join(__dirname, '../../files/', 'passwords.txt'), 'a', 0o775,
    (e: string, id: string) => {
      const value: string = `${name} password: ${password} ${OS.EOL}`;

      FS.write(id, value, null, 'utf-8', () => {
        FS.close(id, () => callback('Password saved to password.txt'));
      });
    });
}

module.exports = {
  save: savePasswordToFile,
};
