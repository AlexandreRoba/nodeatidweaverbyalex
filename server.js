var express = require("express");

var app = express();

app.get("/", function(req,res,next){
    res.send("Node at idweaver By Alex! changed");
});

var port = process.env.PORT || 3000;

app.listen(port,function(err){
   if (err){
       console.dir(err);
   } else{
       console.log("The server is listening");
   }
});