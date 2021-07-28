var express = require('express');
var router = express.Router();
var mongoUtil = require('../services/db')
var multer = require('multer')
var upload = multer({ storage: multer.memoryStorage() })

const { photoList } = require('../controller/getController')
const { classifyImage, handleFileUpload } = require('../controller/uploadController')

mongoUtil.connectToServer(function (err) {
  if (err) console.log(err);

  router.get('/images', photoList);
  router.post('/upload', upload.single('file'), classifyImage, handleFileUpload);

});

module.exports = router;
