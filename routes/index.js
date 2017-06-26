var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Metadata Microservice' });
});

router.post('/upload', upload.single('file'), (req, res) => {
  return res.json(req.file)
})

module.exports = router;
