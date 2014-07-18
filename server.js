var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('whats up');
});

app.get('/download', function(req, res) {
	
});

app.listen(8080);