var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");

//either take the port from the hosting app or localHost 3000
var PORT=process.env.PORT||3000;
var app=express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(express.static(path.join(__dirname + "/public")));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT,function(){
	console.log("App listening at PORT: " + PORT);
});