var http = require('http');

var config = require('./config.js');

var router = require('./main.js');
var server = http.createServer(router);

router.staticFiles('../client/');

server.listen(config.server.port, config.server.ip, function () {
  var time = new Date();
  console.log(time+' server listening on port '+config.server.port+'!');
});