module.exports = function(router,db) {
  this.multer  = require('multer');
  var storage = this.multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/img/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })


  this.upload = this.multer({ storage: storage });

  router.post('/upload/', this.upload.single('file'), function (req, res, next) {
    console.dir(req.file);
    
    res.status(200).json({"src": "img/"+req.file.originalname});
    // req.file is the `avatar` file 
    // req.body will hold the text fields, if there were any 
  });

};