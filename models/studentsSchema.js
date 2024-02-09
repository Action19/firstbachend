const mongoose =  require('mongoose');

const studentsSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    fathername: {type: String, required: true},
    grade: {type: String, required: true},
    image: {type: String},
    login: {type: String, unique: true},
    password: {type: String},
}, {timestamps: true, });


const Students = mongoose.model("Students", studentsSchema);

module.exports =  Students