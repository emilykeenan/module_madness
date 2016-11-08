//two dependencies
var dollar = require('./dollarString');
var random = require('./randomNumber');

var randomDollar = dollar(random);

function writeDollar() {
  return "Account balance: \n"
}

module.exports.dollarAmount = randomDollar;
module.exports.write = writeDollar
