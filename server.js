//requires
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
//var moduleName if needed
var indexRouter = require('./Routes/index'); //server requires index module
var listRouter = require('./Routes/listofpeople');
//variables
var app = express();
var port = 3000

app.use(express.static('public'));// tells express to use this server path to find images etc.

app.use(bodyParser.urlencoded({extended: true})); // tell express to use body parser for objects

//Routes
app.use('/', indexRouter); //tells express to use the required route to access base page

app.use('/personlist', listRouter);

app.listen(port, function() {  //spins up server
    console.log('server is up on', port);
 }) //end spin up