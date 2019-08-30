var http = require('http');
http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		case":
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end('Homepage');
		break;
		case'/about':
		res.writeHead(200,{'Content-Type': 'text/plain' }); res.end('About');

		})

