var app = require("../server");

var port = process.env.PORT || 3000;

app.listen(port,function(err){
   if (err){
       console.dir(err);
   } else{
       console.log("The server is listening");
   }
});
