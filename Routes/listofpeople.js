var router = require('express').Router();
var path = require('path');

var peopleList = [];//array of people sent from client side.

router.post('/', function(req, res) {
     var person = req.body;
     console.log('post person route', person);
     peopleList.push(person);
    res.sendStatus(201);
}); // pushes the new person input object from client into array


router.get('/', function(req, res){
    console.log('in personlist route');
   res.send(peopleList); 
});
// sends array to client.js when GET is requested

module.exports = router; //exports the code in this module to server 