// show perf card ID on ledDisplay

'use strict';

const i2c = require('i2c-bus').openSync(1);
const delay = require('delay');

// require functions
const Display = require('../display.js');
const CardReader = require('../cardReader.js');

// new instances of cardReader and display
const display = new Display(i2c);
const cardReader = new CardReader(i2c);


showID();

async function showID() {
  for (let i = 0; i < 10; i++) {
    display.setIntensity(Math.floor(Math.random() * 500));
    display.setText(cardReader.status().card, {
      line: 0,
      overflow: 2
    });
    await delay(100);
  }
}
