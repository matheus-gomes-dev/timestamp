var express = require('express');
var app = express();
var url = require('url');
var url_parts = url.parse(request.url, true);


app.set('port', (process.env.PORT || 5000));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log("Teste1");
  console.log("Teste2");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


