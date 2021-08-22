var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var multiparty = require("multiparty");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signinpage', { title: 'Express' });
});



router.post("/submitpass", function (req, res) {
  //Handle pass request

  var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    console.log("PENIS");
    res.status(200).send();

  })
})
module.exports = router;
