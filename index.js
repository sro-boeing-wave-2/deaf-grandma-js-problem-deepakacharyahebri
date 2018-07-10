/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */

let bye = 0;
let outputMessage;
const temp = true;
print('What do you want to say to Grandma!!');
let message = prompt();
while (temp === true) {
  if (isUppercase(message)) {
    if (message === 'BYE') {
      bye += 1;
      if (bye > 2) {
        break;
      }
    }
    outputMessage = 'NO, NOT SINCE '.concat(getRandomValue(1930, 1950));
    print(outputMessage);
  } else {
    bye = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
  message = prompt();
}
