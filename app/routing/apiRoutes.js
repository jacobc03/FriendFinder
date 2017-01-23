var path = require('path');
var parks = require('./../data/friends.js');

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

var parkScores = [];
for (var i=0; i<parks.length; i++) {
	parkScores.push(parks[i].score);
}

module.exports = function(app){
    app.post('/api/friends', function(req, res) {
    	var matchscores = [];
    	var matches = [];
    	var userscore = eval(req.body.scores.toString().replace(/,/g,'+'));
    	for (var i=0; i<parkScores.length; i++) {
    		matchscores[i] = Math.abs(userscore-parkScores[i]);
    	}
    	for (var i=0; i<matchscores.length; i++) {
    		if (matchscores.min() == matchscores[i]) {
    			matches.push(parks[i]);
    		}
    	}
    	if (matches.length = 1) {
    		console.log(matches);
    		res.json(matches[0]);
    	}
    	else {
    		res.json(matches[Math.floor(matches.length * Math.random())]);
    	}
	});
}