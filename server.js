// get dependencies and setup
var express = require('express');
var app = express();

// basic route for basic bitches
app.get('/', function(req, res) {
	res.send('whats up');
});

// create sample json object
var sample = {
  "name": "node-file-creator",
  "main": "server.js",
  "dependencies": {
    "express": "^4.6.1"
  }
}

// route to download the sample object as json
app.get('/download', function(req, res) {
	res.set({ 
		"Content-Disposition":"attachment; filename=\"Hello.json\"",
		"Content-Type": "application/json"
	});
	res.send(sample);
});

// start the server
app.listen(8080);
console.log('Check 8080 Yo');