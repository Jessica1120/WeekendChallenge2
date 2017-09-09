//requires
var express = require('express');
var path = require('path');
//var moduleName if needed

//variables
var app = express();
var port = 3000

var peopleList = [] //array of people sent from client side.

app.use(express.static('public'));// tells express to use this server path to find images etc.

app.listen(port, function() {           //spins up server
    console.log('server is up on', port);
    //res.sendFile(path.resolve('./public/index.html'));
}) //end spin up

