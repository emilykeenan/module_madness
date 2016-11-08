var accountBalance = require('./modules/randomDollar');
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(accountBalance.write() + accountBalance.dollarAmount);
  res.end();
}).listen(3000);
