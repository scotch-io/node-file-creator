var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('whats up');
});

var sample = {
  "name": "node-file-creator",
  "main": "server.js",
  "dependencies": {
    "express": "^4.6.1"
  }
}

var text = {
	"hello.json": sample,
	"bye.json": "Goodbye Cruel World!" 
};

app.get('/download', function(req, res) {
	res.set({ 
		"Content-Disposition":"attachment; filename=\"Hello.json\"",
		"Content-Type": "application/json"
	});
	res.send(text['hello.json']);
});

app.listen(8080);