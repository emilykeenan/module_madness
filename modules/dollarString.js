//no dependencies
//houses toLocaleSting
function toDollars(num) {
  return num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

module.exports = toDollars;
