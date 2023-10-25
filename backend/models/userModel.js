const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserModel = new Schema({
id: {
type: Number, required: true, unique: true
},
username: {
type: String, unique: true
},
firstName: {
type: String
},
lastName: {
type: String
},
date: {
type: Date, default: Date.now
}
});
const User = mongoose.model("User", UserModel);
module.exports = User;