'use strict';

const person = [];

while (person.length !== 4) {
  let temp = (Math.round(Math.random() * 9));

  if (!person.includes(temp)) {
    person.push(temp);
  }

  temp = Math.round(Math.random() * 9);
}

module.exports = { person };
