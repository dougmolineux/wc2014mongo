
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { 
		title: 'World Cup 2014 MongoDB Experiment Project' 
	})
};
