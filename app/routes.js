// app/routes.js

// grab the nerd model we just created
var Users = require('./models/users');
var mongo = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;

module.exports = function(app) {
    app.get('/api/fetch/users', function(req, res) {

        // return res.status(400).send({test: "cool"});

        Users.getUsers(function(err, result) {
            console.log(result);

            if (err)
                res.send(err);
            res.json(result); // return all users in JSON format
        });//.sort({"_id": -1});
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};
