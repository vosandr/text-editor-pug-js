const express = require("express");
  
const app = express();
  
app.set("view engine", "pug");
//app.set("views", "templates"); // установка пути к представлениям. По умолчанию - views
 
app.use("/", function(request, response){
      
    response.render("index");
}); 
 
app.listen(3000, () => console.log('Example app listening on port 3000!'));