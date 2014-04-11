var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wc');
mongoose.connection.on('open', function(){
	mongoose.connection.db.dropDatabase(function(err){
		console.log("wc dropped");
		process.exit();	
	});
});
