// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    let object = {};
    let regularAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result = "";
    let decodeIndex = [];
    let encodeIndex = [];
    // returns false if no alphabet key is present //
    if (!alphabet) {
      return false;
    }
    // make sure alphabet key is 26 char //
    if (alphabet.length !== 26) {
      return false;
    }
    //check for duplicates //
    for (let i = 0; i < alphabet.length; i++) {
      let char = alphabet[i];
      if (!object[char]) {
        object[char] = 1;
      } else {
        return false;
      }
    }
    // if encode = false, code to decode message //
    // loop through alphabet and return an array with index positions of input in the alphabet key //
    if (encode === false) {
      for (let i = 0; i < input.length; i++) {
        let inputChar = input[i];
        // maintains spaces //
        if (inputChar === " ") {
          decodeIndex.push(inputChar);
        }
        for (let j = 0; j < alphabet.length; j++) {
          let keyChar = alphabet[j];
          if (inputChar === keyChar) {
            decodeIndex.push(j);
          }
        }
      }
      // loop through regularAlphabet and match index positions with the positions in the regularAlphabet //
      for (let i = 0; i < decodeIndex.length; i++) {
        if (decodeIndex[i] === " ") {
          result += decodeIndex[i];
        } else {
          result += regularAlphabet[decodeIndex[i]];
        }
      }
      // final result will be the regularAlphabet letters at the matching index positions //
      return result;
    }
    // code to encode message //
    // loop through regularAlphabet and get the index positions of each char of input//
    for (let i = 0; i < input.length; i++) {
      let inputChar = input[i];
      // maintains spaces //
      if (inputChar === " ") {
        encodeIndex.push(inputChar);
      }
      for (let j = 0; j < regularAlphabet.length; j++) {
        let regAlphaChar = regularAlphabet[j];
        if (inputChar === regAlphaChar) {
          encodeIndex.push(j);
        }
      }
    }
    // with an array of indexes for each letter of input, match the indexes with their index position in the given alphabet key //
    for (let i = 0; i < encodeIndex.length; i++) {
      if (encodeIndex[i] === " ") {
        result += encodeIndex[i];
      } else {
        result += alphabet[encodeIndex[i]];
      }
    }
    // final result will be the letters of the alphabet key at the matching indexes //
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule;
