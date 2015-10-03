var express = require('express'),
	app = express(),
	exphbs  = require('express-handlebars');

//

//View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname + '/bower_components'));

// Config vars
//environmental 
var port = process.env.PORT || 3000;

// every time user visit here, it goes to / server. 
// modify response 
app.get('/', function (req, res) {
    res.render('home');
});
 
// port 3000 
app.listen(port);
console.log("Server Active on port : ", port);