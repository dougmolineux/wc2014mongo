// include mongoose
var mongoose = require('mongoose');

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

// make a new team, called england
var england = new Team({
	name: "England",
	continent: "Europe",
	group: "D",
	ranking: 11
});

england.save(function() {
	console.dir(england);
	console.log("Team Saved");
	process.exit();
});
