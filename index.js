'use strict';

let http = require('http');
let httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function (req, res) {
    proxy.web(req, res, { target: 'http://sapient5.evaluation.dw.demandware.net/s/SiteGenesisGlobal' });
});
server.listen(process.env.PORT || 5050);
console.log("Server started on port " + process.env.PORT);
