const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send('Hello to "My first independent project!"');
});


app.listen(4000, function(){
    console.log("Server started on port 4000!");
});