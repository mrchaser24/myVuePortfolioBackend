const noteRoutes = require('./first_routes');

module.exports = function(app,db){
    noteRoutes(app, db); // the other route can go here
}