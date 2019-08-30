var http = require('http')
var upperCase = require('upper-case')

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end(upperCase('Hello World!');
}).listen(8080);

console.log('Server started on localhost:8080' +'press Ctrl-C to continue. Jom cuba!')



