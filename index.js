var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/linuxtemp"] = requestHandlers.linuxtemp;
handle["/mactemp"] = requestHandlers.mactemp;

server.start(router.route, handle);