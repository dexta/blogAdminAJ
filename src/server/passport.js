module.exports = function(router,db) {
  this.port = require('passport');
  this.localStrategy = require('passport-local').Strategy;

  this.config = require('./config.js');

  var bcrypt = require('bcrypt');
  var bSalt = bcrypt.genSaltSync(10);
  // var db = require('./mysqlServer.js');

  // console.log("what the hack is my id "+this.bcrypt.hashSync('geheim',this.bSalt));

  var checkUserDB = function checkUserDB(profile,cb) {
    var queryStr = 'select id from user where provider_id = '+profile.id+';';
      db.query(queryStr,function(rows){
        if((rows[0]||false)&&(rows[0].id||false)) {
          profile.sqlId = rows[0].id;
          return cb(null,profile);
        } else {
          var usu = profile;
          var queryStr = 'insert into user (provider,provider_id,displayName) values("'+usu.provider+'",'+usu.id+',"'+usu.displayName+'");';
          // queryStr += 'SELECT LAST_INSERT_ID();';
          db.query(queryStr,function(rows){
            if( (rows||false) ) { 
              console.log("insert user "+usu.displayName+ " for "+usu.provider+" with id "+usu.id);
              profile.sqlId = rows.insertId;
              return cb(null,profile);
            }
            return cb(null,profile);
          });
        }
      });
  };


  this.port.use(new this.localStrategy(
    function(username, password, cb) {     
      db.getUser(username,function(user) {
        console.log("user: "+user[0].name+" || password: "+password+" userLen: "+user.length);
        console.dir(user[0]);
        if( bcrypt.compareSync(password, user[0].password) ) {
          return cb(null, user[0]);
        }
        return cb(null,false);
      });
    }));

  this.port.serializeUser(function(user, cb) {
    cb(null, user);
  });

  this.port.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

  this.port.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
    console.log("is Auth "+req.isAuthenticated());
    if (req.isAuthenticated()) { return next(null); }
    res.redirect('/error');
  };

  this.port.getUserIfThere = function getUserIfThere(req, res, next) {
    if (req.isAuthenticated()) { return next(null); }
    return next(null);
  };

  router.use(require('cookie-parser')());
  router.use(require('body-parser').urlencoded({ extended: true }));
  router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

  router.use(this.port.initialize());
  router.use(this.port.session());

};