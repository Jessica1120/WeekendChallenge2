var router = require('express').Router();
var path = require('path');

router.get('/', function(res,req){
    res.sendFile(path.resolve('./Public/index.html'));
   }); //index route - I think this is for when a client first lands on a page.

module.exports = router; //exports the code in this index to server 