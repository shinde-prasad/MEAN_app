var mongoose = require('mongoose');

// categories Schema
var usersSchema = mongoose.Schema({
    id: {
        type: String
    },
    name:{
        type: String
    },
    mobileno:{
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Users = module.exports = mongoose.model('Users', usersSchema);

//Get Brands
module.exports.getUsers = function(callback) {

console.log("getetet")
    Users.find({}, callback )
}
