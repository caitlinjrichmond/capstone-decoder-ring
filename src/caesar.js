// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    let result = "";
    let numPosition = 0;
    // code to return false if there is no shift preset, if shift = 0, if shift is less than -25, and if shift is more than 25//
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    // code to properly decode a message by shifting in the opposite direction //
    if (encode == false) {
      shift = shift * -1;
    }
    // for loop to encode/decode message //
    for (let i = 0; i < input.length; i++) {
      let inputLetter = input[i];
      // code to maintain spaces and other non-alphabetic symbols //
      if (inputLetter.charCodeAt() >= 97 && inputLetter.charCodeAt() <= 122) {
        numPosition = inputLetter.charCodeAt() + shift;
        //code to make end of alphabet wrap//
        if (numPosition > 122) {
          numPosition = numPosition - 26;
        }
        if (71 < numPosition && numPosition < 97) {
          numPosition = numPosition + 26;
        }
        result += String.fromCharCode(numPosition);
      } else {
        result += inputLetter;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule;
