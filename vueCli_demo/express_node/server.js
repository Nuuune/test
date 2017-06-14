var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile( __dirname + "/" + "index.html" );
});

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
  	var data = JSON.parse(msg);
    var nmsg = JSON.stringify({ 'message': data.message, 'img': data.img, 'time': data.time, 'name': data.name });
    ws.send(nmsg);
    console.log("msg had sand");
  });
  console.log('socket is linking');
});

app.listen(3000);