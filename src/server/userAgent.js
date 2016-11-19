module.exports = function(db) {
  this.addUser = function addUser(newUser,cb) {
    console.dir(newUser);
    if(!newUser.email||!newUser.name||!newUser.password||!newUser.role) return cb({status:"missing some thing"});
    var queryStr = 'select name,email from User where email = '+ db.connection.escape(newUser.email)+';';
    console.log("dbug query: "+queryStr);
    db.query(queryStr,function(rows){
      if((rows[0]||false)&&(rows[0].name||false)) {
        console.log("user already here "+rows[0].email);
         cb({status:'email already registed'});
      } else {
        var queryStr = 'insert into User (name,email,password,role) ';
        queryStr += 'values("'+newUser.name+'","'+newUser.email+'","'+newUser.password+'","'+newUser.role+'");';
        console.log("dbug queryStr "+queryStr);
        db.query(queryStr,function(rows){
          if( (rows||false) ) { 
            newUser.sqlId = rows.insertId;
            return cb({status:'success'});
          }
          return cb({status:'no new user inserted'});
        });
      }
    });

  };
}