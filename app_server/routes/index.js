var express = require('express');
var router = express.Router();

/* GET home page. */
var homepagecontroller=function(req,res){
  res.render('index',{title:'Welcome to AIB Class'})
};
router.get('/',homepagecontroller);
module.exports = router;
