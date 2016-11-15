var express = require('express');
var app = express();
var url = require('url');
var moment = require('moment')


app.set('port', (process.env.PORT || 5000));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, response) {	
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl; 
  var parameter = (req.originalUrl).substring(1,(req.originalUrl).length)
  
  if (isNaN(parameter) && (parameter.indexOf("January") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '01';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("y")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Jan " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("February") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '02';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("y")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Feb " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("March") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '03';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("h")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Mar " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("April") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '04';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("l")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Apr " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("May") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '05';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("y")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "May " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("June") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '06';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("e")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Jun " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("July") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '07';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("y")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Jul " + day + ', ' + year 
    };
    response.json(time);
  }


  else if (isNaN(parameter) && (parameter.indexOf("August") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '08';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("t")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Aug " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("September") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '09';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("r")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Sep " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("October") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '10';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("r")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Oct " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("November") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '11';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("r")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    var time = {
    	unix: unixTime,
    	natural: "Nov " + day + ', ' + year 
    };
    response.json(time);
  }

  else if (isNaN(parameter) && (parameter.indexOf("December") >= 0) && (parameter.indexOf(",") >= 0)){
  	
  	var month = '12';
  	var year = parameter.substring((parameter.indexOf(",")+1),parameter.length);
    var day = parameter.substring((parameter.indexOf("r")+1),(parameter.indexOf(",")));
    var parsedDate = year + '/' + month + '/' + day;
    var unixTime = moment(parsedDate, 'YYYY-MM-DD').valueOf()/1000;
    unixTime = unixTime.replace('%20','');
    var time = {
    	unix: unixTime,
    	natural: "Dec " + day + ', ' + year 
    };
    response.json(time);
  }






  else if (parameter != "" && !isNaN(parameter)){
    var a = new Date(parameter * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    var time = {
    	unix: parameter,
    	natural: month + date + ', ' + year 
    };
    response.json(time);
  }

  else{
  	var time = {
    	unix: null,
    	natural: null
    };
    response.json(time);
  }


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


