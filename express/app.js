/**
 * Module dependencies.
 */
var express = require('express'),
    routes = require('./routes'),
    mongoose = require('../node_modules/mongoose');

var app = module.exports = express.createServer();

// connect to wc mongodb
mongoose.connect('mongodb://localhost/wc');

// define the schema for a team
var teamSchema = new mongoose.Schema({
        name: String,
        continent: String,
        group: String,
        ranking: Number,
});

// create the model from the schema
var Team = mongoose.model('Team', teamSchema);

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/api', function (req, res) {
	//res.send('WC2014 API is running');
	Team.find({}, function(err, teams) {
		//for(var j = 0; j < teams.length; j++) {
		//	console.dir(teams[j].name);
		//}
		res.json(teams);
	});
});

app.listen(3000, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
