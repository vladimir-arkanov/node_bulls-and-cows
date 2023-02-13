'use strict';

const computer = [];

while (computer.length !== 4) {
  let temp = (Math.round(Math.random() * 9));

  if (!computer.includes(temp)) {
    computer.push(temp);
  }

  temp = Math.round(Math.random() * 9);
}

module.exports = { computer };
