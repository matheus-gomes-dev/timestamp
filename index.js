var express = require('express');
var app = express();
var url = require('url');


app.set('port', (process.env.PORT || 5000));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, response) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  //response.send(fullUrl);

/*
  if (fullUrl.search("January") != -1)
    response.send("teste1");
  else
    response.send("teste2");

*/

  //response.send(req.get);
  var parameter = (req.originalUrl).substring(1,(req.originalUrl).length)
  response.send(parameter);
  //if())

  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


