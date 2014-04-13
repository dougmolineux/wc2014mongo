// include mongoose
var mongoose = require('mongoose'),
	teams = [];

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

// Make Group D teams
var england = makeTeam("England", "Europe", "D", 11);
var uruguay = makeTeam("Uruguay", "South America", "D", 5);
var italy = makeTeam("Italy", "Europe", "D", 9);
var costa = makeTeam("Costa Rica", "North America", "D", 34);

// add each team to the teams array
teams.push(england);
teams.push(uruguay);
teams.push(italy);
teams.push(costa);

for(var i = 0; i < teams.length; i++) {
	teams[i].save(function() {
		console.log(teams[i].name + " saved in wc.");
	});
}

function makeTeam(name, cont, group, rank) {
	return new Team({
		name: name,
		continent: cont,
		group: group,
		ranking: rank
	});
}
