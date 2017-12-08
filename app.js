const express = require("express");
var fs = require("fs");
const router = express.Router();
const app = express();
const shortener = require("./shortener.js");
var obj;

//setup static files.
app.use('/assets', express.static('assets'));

//connect router to app
app.use(router);

//serve html with instruction
router.get("/urlshort", function(req, res, next){
	res.writeHead(200, {"Content-Type":"text/html"});
	var html = fs.createReadStream(__dirname + "/index.html", "utf8");
	html.pipe(res);
});

//serve json
router.get("/urlshort/:url", function(req, res, next){
	res.writeHead(200, {"Content-Type":"text/json"});
	var obj = shortener(req.params.url);
	res.end(JSON.stringify(obj));
});

/*
//setup redirect link
router.get(obj.short_url, function(req, res, next){
	res.writeHead(200, {"Content-Type":"text/html"});
	var html = fs.createReadStream(__dirname + "/index.html", "utf8");
	html.pipe(res);
}); */

//setup port to listen to
app.listen(process.env.port || 3000);
console.log("Now listening to requests.");