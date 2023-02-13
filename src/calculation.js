'use strict';

const { person } = require('./person');
const { computer } = require('./computer');

function calculation(v, n) {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < computer.length; i++) {
    if (person[i] === computer[i]) {
      bulls++;
    } else if (person[i] !== computer[i] && computer.includes(person[i])) {
      cows++;
    }
    continue;
  }

  return [`cows ${cows}`, `bulls ${bulls}`];
}

module.exports = { calculation };
