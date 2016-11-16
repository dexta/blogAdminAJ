module.exports = function(router,db) {
  this.multer  = require('multer')
  this.upload = this.multer({ dest: 'uploads/' })
   
  router.post('/upload/', this.upload.single('file'), function (req, res, next) {
    console.dir(req.file);
    
    res.send("ok");
    // req.file is the `avatar` file 
    // req.body will hold the text fields, if there were any 
  })
   
  router.post('/aaupload', this.upload.array('model', 12), function (req, res, next) {
    console.dir(req.body);
    res.send("not ok");
    // req.files is array of `photos` files 
    // req.body will contain the text fields, if there were any 
  })
   
  this.cpUpload = this.upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  router.post('/cool-profile', this.cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
    // 
    // e.g. 
    //  req.files['avatar'][0] -> File 
    //  req.files['gallery'] -> Array 
    // 
    // req.body will contain the text fields, if there were any 
  })

}