const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserModel = new Schema({
id: {
type: Number, required: true, unique: true
},
username: {
type: String, required: true, unique: true
},
firstName: {
type: String, required: true
},
lastName: {
type: String, required: true
},
date: {
type: Date, default: Date.now
}
});
const User = mongoose.model("User", UserModel);
module.exports = User;