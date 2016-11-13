var http = require('http');
var path = require('path');

var async = require('async');

var config = require('./config.js');
config.lang = 'de';
var db = require('./mysqlServer.js');


var express = require('express');
var router = express();

var Pass = require('./passport.js');
var pass = new Pass(router,db);

router.staticFiles = function staticFiles(staticPath) {
  router.use(express.static(path.resolve(staticPath)));
};

router.post('/loginLocal',
  pass.port.authenticate('local'),
  function(req,res){
    res.send(req.session["passport"]);
});

router.get('/user',
  pass.port.ensureAuthenticated,
  function(req,res){
    res.send(req.session["passport"]);
});

router.get('/logout', function(req, res){
  req.logout();
  res.send({logout:true});
});

router.get('/error',function(req,res){
  res.send('You are OUT !!1!');
});


router.get('/get/series/seen',
  pass.port.ensureAuthenticated,
  function(req,res){
  console.log("session Passport "+JSON.stringify(req.session["passport"].user.sqlId) );
  var outoff = {};
  var uid = req.session["passport"].user.sqlId||0;
  var queryStr = 'select series_id,date from seen_serie where user_id = '+uid+';';
  db.query(queryStr,function(rows){
    for(var s in rows) {
      outoff[rows[s].series_id] = rows[s];
    }
    res.send(outoff);
  });  
});

// db.testDatabase();

module.exports = router;