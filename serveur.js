const express = require('express');
const path = require("path");
const app = express();


// serve the static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
    console.log();
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "style.css"))
});
app.get('/client.js', (req, res) => {
    res.sendFile(path.join(__dirname,  "client.js"))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"/login.html"));
    console.log();
});

// serve the json info with the lenght associated to the sent name
app.get('/submit', function(req, res) {
    console.log(req.query);
    var reqJson = req.query.name;
    var Password=req.query.Password;
    if(Password=="123"){
        console.log("ok");
        var result = JSON.stringify({message:"Right Password"});}
    else{JSON.stringify({message:"Not the Password"});}

    console.log("Sending  : " + result);
    res.send(result);
});


var port = 3020;
app.listen(port, function(){
    console.debug("Server listening in port : " + port);

})

