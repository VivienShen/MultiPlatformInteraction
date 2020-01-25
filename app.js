const express = require('express');                    //get that code //require means include
const app = express();                                 //initialize //express is included externally
const http = require('http');                          //go get it //http is already included like ofdrawcircle
const server = http.createServer(app);                 //initialize

const PORT = 8080;                                     //which port is our context served by(default is 80, but don't keep it like that)

server.listen(PORT);                                   //start them up
app.use(express.static( __dirname + '/public'));       //where is our default

console.log("Listening to port: " + PORT);             //print to terminal

//set our route(S)
//serve up file index.html when someone type in localhost:1111
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});