/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  const celc = (fahren - 32) * 5 / 9;
  return celc;
}

/**
 * Takes both numbers (F, C) and displays a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  let feels = "";

  if (fahren < 32) {
    feels = "very cold";
  } else if (fahren < 64) {
    feels = "cold";
  } else if (fahren < 86) {
    feels = "warm";
  } else if (fahren < 100) {
    feels = "hot";
  }

  return `The temperature in Fahrenheit is ${fahren}°F, which is approximately ${celc.toFixed(2)}°C. It feels ${feels}.`;
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "Enter a number; we will convert that number from Fahrenheit to Celsius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Let's try that again. Enter a number; we will convert that number from Fahrenheit to Celsius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
