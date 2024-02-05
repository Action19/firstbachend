const mongoose =  require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String },
}, {timestamps: true, });


const Users = mongoose.model("Users", usersSchema);

module.exports =  Users