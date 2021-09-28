// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    // must begin with 2 arrays,l alphabet and pSquare to establish the positions of the letters //
    const alphabet = [
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "(i/j)",
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
    const pSquare = [
      " ",
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    let result = "";
    let alphaIndex = [];
    let pIndex = [];
// while decoding, an uneven number of numbers will return false//
    if (encode === false) {
      // splitting and joining the string takes out spaces, leaving only numbers //
      let splitInput = input.split(" ");
      let inputNoSpaces = splitInput.join("");
      // checks if ammount of numbers is even or odd //
      if (inputNoSpaces.length % 2 !== 0) {
        return false;
      }
    }
// CODE TO PROPERLY DECODE A MESSAGE //
    if (encode === false) {
      let newInput = [];
      // splits an input to separate spaces and individual words//
      input = input.split(/(\s+)/);
      for (let i = 0; i < input.length; i++) {
        // creates array of each word with each letter of the word separated into it's associated grid number //
        newInput.push(input[i].match(/.{1,2}/g));
      }
      // array contains arrays, so must loop through the array, then loop through each nested array //
      for (let i = 0; i < newInput.length; i++) {
        let newInputItem = newInput[i];
        for (let z = 0; z < newInputItem.length; z++) {
          let pLetter = newInputItem[z];
          // then loop through the pSquare array to get the matching indexes to later be compared with alphabet array //
          for (let j = 0; j < pSquare.length; j++) {
            let pNumber = pSquare[j];
            if (pNumber === pLetter) {
              pIndex.push(j);
            }
          }
        }
      }
    }
    // creates the result: returns the letters at the index that matches the index of pSquare //
    for (let i = 0; i < pIndex.length; i++) {
      result = result.concat(alphabet[pIndex[i]]);
    }
// CODE TO PROPERLY ENCODE MESSAGE //
    for (let i = 0; i < input.length; i++) {
      let inputChar = input[i];
      // ensure that both i & j will have the same pSquare value //
      if (inputChar === "i" || inputChar === "j") {
        inputChar = "(i/j)";
      }
      //loop through alphabet array and input, returning an array of the index value of each input letter in the alphabet array //
      for (let j = 0; j < alphabet.length; j++) {
        let alphaChar = alphabet[j];
        if (inputChar === alphaChar) {
          alphaIndex.push(j);
        }
      }
    }
// loop through the alphaIndex array to return the pSquare values that correspond with alphabet index values //
    for (let i = 0; i < alphaIndex.length; i++) {
      result = result.concat(pSquare[alphaIndex[i]]);
    }
    // trim any extra spaces //
    return result.trim();
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule;
