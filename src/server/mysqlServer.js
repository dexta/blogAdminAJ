var mysql = require('mysql');
var config = require('./config.js');

var db = {};
if(!config.nullSql) {
db.connection = mysql.createConnection({
  host     : config.database.host,
  user     : config.database.user,
  password : config.database.pass,
  database : config.database.db
});
db.connection.connect();
}

db.testDatabase = function testDatabase(){
  db.connection.query('SELECT * FROM user LIMIT 1', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows[0].id+'. '+rows[0].name);
  });
};


db.query = function query(qString,callback) {
  db.connection.query(qString, function(err, rows, fields) {
    if (err) throw err;
    console.log('debug QUERY: '+qString);
    callback(rows);
  });
};

db.getUser = function getUser(username,callback) {
  if(config.nullSql) {
    console.log("nooSQL user"+username);
    console.dir(config.nullSQLDB.user[username]);
    callback(config.nullSQLDB.user[username]);
  } else {
    var queryStr = "SELECT * FROM User WHERE email = "+ db.connection.escape(username)+" LIMIT 1;";
    db.query(queryStr,callback);
  }
};


module.exports = db;