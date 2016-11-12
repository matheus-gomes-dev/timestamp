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

  if (fullUrl.search("January") != -1)
    response.send("teste1");
  else
    response.send("teste2");

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


