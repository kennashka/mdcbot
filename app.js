var express = require('express');
var app = express();
var path = require('path');
//var favicon = require('express-favicon');



// Bootstrap and Jquery Config

// app.use('/', express.static(__dirname + '/www')); // redirect root
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// path to favicon directory
//app.use(favicon(__dirname + '/public/kfavi3.png'));

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use( express.static( "public" ) );

// index page
app.get('/', function(req, res) {
    res.render('page/index');
});

app.get('/assemble', function(req, res) {
    res.render('page/assemble');
});



app.listen(80, () => console.log('Server started...'));