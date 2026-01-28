/* Capitalize */

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/* Reverse String */

function reverseString(str) {
  return str.split("").reverse().join("");
}

/* Calculator */

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  }
};

/* Caesar Cipher */

function caesarCipher(str, shift) {
  return str
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Uppercase letters
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(
      ((code - 65 + shift) % 26) + 65
    );
  }

  // Lowercase letters
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(
      ((code - 97 + shift) % 26) + 97
    );
  }

  // Non-alphabet characters
  return char;
}

/* Analyze Array */

function analyzeArray(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};

