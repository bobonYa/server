var http = require('http');


http.createServer(function(req, res) {
	console.log("Server start");
	//res.statusCode = 200;
	res.writeHead(200, {"Control-Allow-Origin": "*"});
	res.end("NodeJs server create");


}).listen(1400);
