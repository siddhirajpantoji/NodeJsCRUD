var express = require("express");
var reqParser = require("./modules/request-parser.js");
console.log(reqParser);
var app = express();
var router = express.Router();
var path = __dirname + '/html/';
app.use('/webresource', express.static('webresource'));
router.use(function (req,res,next) {
  //console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index2.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contacts.html");
});

router.all("/employee",function(req,res){
  var jsonData  = reqParser.getEmployeeData(req,res);
  res.writeHead("200",{"Content-Type": "application/json"});
  res.end(JSON.stringify(jsonData));
});

app.use("/",router);

app.use("*",function(req,res){
	console.log("404 Found ");
	console.log("Request Param Found "+JSON.stringify(req.query));
	res.writeHead("400");
	res.write("Page")
  //res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
