var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mycostumers');
var Schema = mongoose.Schema
const userDataSchema = new Schema({
  title:{type:String,required:true},
  content:{type:String,required:true},
  author:{type:String,required:true}
},{collection:'users'})

var userData = mongoose.model('userData',userDataSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  userData.find().then(function(doc){
    res.render('index',{
      items:doc
    })
  })
  
});

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var data = new userData(item)
  data.save()
  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  var id = req.body.id;
  userData.findById(id,function(err,doc){
    if(err){
      console.error(err)
    }
    doc.title = req.body.title
    doc.content = req.body.content
    doc.author = req.body.author
    doc.save()
    res.redirect('/')
  })

});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  userData.findByIdAndRemove(id).exec(
    res.redirect('/')
  )
});

module.exports = router;
