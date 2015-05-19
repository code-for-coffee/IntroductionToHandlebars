var appName = "Introduction to Handlebars";
var express = require('express');
var app = express();
var listeningPort = 3000;

app.use(express.static(__dirname + '/Resources'));
app.use(express.static(__dirname + '/Views'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(listeningPort);
console.log(appName + " is being served on localhost:" + listeningPort);