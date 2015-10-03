//requiring the node packages, ex- name of node package:express
var express = require('express'),
// like 'instantiating 'this' package (express)'
	app = express(),
	//express handlebars
	exphbs  = require('express-handlebars');

//

//View Engine
//ex-helloworld // default template is gonna be 'main'
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//Turn that engine to view
app.set('view engine', 'handlebars');

//how you enable a directory to be accessed by users
//__dirname (in this case : app.js)
app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname + '/bower_components'));

// Config vars
//environmental var
var port = process.env.PORT || 3000;

// every time user visit here, it goes to / server. 
// modify response 
app.get('/', function (req, res) {
    res.render('home');
});
 
// port 3000 
app.listen(port);
console.log("Server Active on port : ", port);