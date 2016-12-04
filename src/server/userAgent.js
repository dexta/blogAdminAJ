module.exports = function(router,pass,db) {
router.post('/addUser',
  pass.port.isAdmin,
  function(req,res) {
    req.checkBody('name').notEmpty();
    req.checkBody('email').notEmpty().isEmail();
    req.checkBody('password').notEmpty();
    req.checkBody('role').notEmpty().isAlpha();
    // console.dir(req.body);
    var errors = req.validationErrors();
    if(errors) {
      return res.status(500).json(errors);
    }
    
    var newUser = req.body;
    var queryStr = 'select name,email from User where email = '+ db.connection.escape(newUser.email)+';';
    db.query(queryStr,function(rows){
      if((rows[0]||false)&&(rows[0].name||false)) {
         return res.status(500).json([{msg:'email already registered',param:"emailDup",value:newUser.email}]);
      } else {
        var queryStr = 'insert into User (name,email,password,role) ';
        queryStr += 'values("'+newUser.name+'","'+newUser.email+'","'+newUser.password+'","'+newUser.role+'");';
        db.query(queryStr,function(rows){
          if( (rows||false) ) { 
            // newUser.sqlId = rows.insertId;
            return res.status(200).json([{msg:'new user registed',param:"success",value:rows}]);
          }
          return res.status(500).json([{msg:'sql error',param:"sqlError",value:rows}]);
        });
      }
    });
  });
// path === /addUser

router.get('/viewUsers',
  pass.port.isAdmin,
  function(req,res) {
    var queryStr = 'select id,name,email,role,lang,active from User;';
    db.query(queryStr,function(rows){
      if(!rows[0]||false) res.status(500).json({error:'no user'});
      res.status(200).json(rows);      
    });

    // res.status(200).json([{name:'a',role:'gott'},{name:'b',role:'gott'}]);
  });

router.get('/resetPassword',
  pass.port.isAdmin,
  function(req,res) {
    req.checkBody('email').isEmail();
    req.checkBody('randome').notEmpty();
    var errors = req.validationErrors();
    if(errors) {
      return res.status(500).json(errors);
    } 
    
    
  });


};// end of module exports