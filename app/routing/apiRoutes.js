var path =require('path');
var parkData = require ('../data/friends.js');

module.exports = function(app){
  app.post('/api/friends', function(req, res) {
    res.json(parkData);
  });
}