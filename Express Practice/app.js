// var express = require('express')
// var bodyParser = require('body-parser')
// var process = require('process')
// const path = require('path')
// const app = express()


// // var logger = function(req,res,next){
// //     console.log('Logging with: ',req);
// //     next();
// // }
// // app.use(logger)
// app.set('view engine','ejs')
// app.set('views',path.join(__dirname,'views'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

// // app.use(express.static(path.join(__dirname,'public')))
// const users = [
//     {
//         id:1,
//         fName:'ofidfs',
//         lName:'miovfne',
//         age:20
//     },
//     {
//         id:2,
//         fName:'feknknor',
//         lName:'eqwskdo',
//         age:30
//     },
//     {
//         id:3,
//         fName:'vxlkcofidfs',
//         lName:'qweemiovfne',
//         age:26
//     },
// ]
// app.get('/',function(req,res){
//     res.render('index',{
//         users:users
//     })
// })

// app.post('/user/add',function(req,res){
//     var newUser = {
//         fName:req.body.fName,
//         lName:req.body.lName,
//         age:req.body.age
//     }
//     console.log(newUser)
//     res.send("Form submitted...")
// })

// app.listen(3000,function(){
//     console.log('Server started...')
// })
var express = require('express');
var app = express();
var fs = require("fs");
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
           res.send( data );
   });
})

app.listen(8081, function () {

  console.log("Example app listening at 8081")

})