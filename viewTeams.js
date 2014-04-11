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

Team.find({}, function(err, db_users) {
	console.dir(db_users);
	process.exit();
});
