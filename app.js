//set up server, write 200 head, use res.write to send message that concatenates
//results from third module but formatted w/ dollar amt

var module3 = require('./modules/module3');
var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(module3.result2+module3.result1);
  res.end();
}).listen(3000);

console.log(module3.result1);
