var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('./index.html'));
});

/*
app.get('/*', function(req, res) {
    var responseFilePath = "."+req.url;
    var stat = fs.statSync(responseFilePath);
	console.log("Reading " + responseFilePath);
    fs.readFile(responseFilePath, function (err, data) {
		if (!err) {
			res.writeHead(200, {
				'Content-Type': 'text/css',
				'Content-Length': stat.size
			});
			res.write(data, 'binary');
			res.end(data);
		}
    });
});
*/

app.use(express.static('public'));

var server = http.createServer(app);
server.listen(80);