const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {


  constructor(direction = true) {
    if (direction === true) {
      this.direct = 'directMachine';
    } else {
      this.direct = 'reverseMachine';
    }

  }

  encrypt(message, key) {

    let crypt = '';
    let nonAlphabet = 0;

    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      let code = letter.toUpperCase().charCodeAt();
      if (this.isAlphabet(code)) {
        let keyCodeIndex = ((i - nonAlphabet) % key.length);
        let keyCode = key[keyCodeIndex].toUpperCase().charCodeAt();
        crypt += this.cryptLetter(code, keyCode);
      } else {
        crypt += letter;
        nonAlphabet++;
      }
    }

    if (this.direct === 'reverseMachine') {
      return crypt.split('').reverse().join('');
    }
    return crypt;
  }

  decrypt(encryptedMessage, key) {

    let encrypt = '';
    let nonAlphabet = 0;

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
      let letter = encryptedMessage[i];
      let code = letter.toUpperCase().charCodeAt();//x-88
      if (this.isAlphabet(code)) {
        let keyCodeIndex = ((i - nonAlphabet) % key.length);
        let keyCode = key[keyCodeIndex].toUpperCase().charCodeAt();
        encrypt += this.encryptLetter(code, keyCode);
      } else {
        encrypt += letter;
        nonAlphabet++;
      }
    }

    if (this.direct === 'reverseMachine') {
      return encrypt.split('').reverse().join('');
    }
    return encrypt;
  }

  isAlphabet(code) {
    if (code >= 65 && code <= 90) {
      return true;
    } else {
      return false;
    }
  }

  cryptLetter(code, keyCode) {
    let shiftFromBeggining = keyCode - 65;
    let resultCode = code + shiftFromBeggining;
    if (resultCode > 90) {
      resultCode = resultCode - 90 + 65 - 1;
    }
    let result = String.fromCharCode(resultCode);
    return result;
  }

  encryptLetter(code, keyCode) {
    let shiftEncryptedLetter = code - 65;
    let shiftCodeLetter = keyCode - 65;
    let resultCode = 90 - (shiftCodeLetter - shiftEncryptedLetter) + 1;
    if (resultCode > 90) {
      resultCode = resultCode - 90 + 65 - 1;
    }
    let result = String.fromCharCode(resultCode);
    return result;
  }

}

module.exports = {
  VigenereCipheringMachine
};
