// include mongoose
var mongoose = require('mongoose'),
    groups = ['A','B','C','D','E','F','G','H'];

// connect to wc mongodb
mongoose.connect('mongodb://localhost/wc');

// define the schema for a team
var teamSchema = new mongoose.Schema({
	name: String,
	continent: String,
	group: String,
	ranking: Number
});

// create the model from the schema
var Team = mongoose.model('Team', teamSchema);

for(var i = 0; i < groups.length; i++) {
	Team.find({ group : groups[i]}, function(err, teams) {
		for(var j = 0; j < teams.length; j++) {
			console.dir(teams[j].name);
		}
	});
}

