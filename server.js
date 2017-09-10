//requires
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
//var moduleName if needed
var indexRouter = require('./Routes/index'); //server requires index module
//variables
var app = express();
var port = 3000

var peopleList = [];//array of people sent from client side.

app.use(express.static('public'));// tells express to use this server path to find images etc.

app.use(bodyParser.urlencoded({extended: true})); // tell express to use body parser for objects

//Routes
app.use('/', indexRouter); //tells express to use the required route to access base page


app.post('/personlist', function(req, res) {
     var person = req.body;
     console.log('post person route', person);
    peopleList.push(person);
    res.sendStatus(201);
 }); // pushes the new person input object from client into array

 app.get('/personlist', function(req, res){
  console.log('in personlist route');
 res.send(peopleList); // sends array to client.js when GET is requested
});

 app.listen(port, function() {  //spins up server
    console.log('server is up on', port);
 }) //end spin up