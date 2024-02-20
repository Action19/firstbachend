const mongoose =  require('mongoose');

const gradeSchema = new mongoose.Schema({
    grades: {type: [ String ], required: true}
});

const teachersSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    fathername: {type: String, required: true},
    science: {type: [ gradeSchema ], required: true},
    image: {type: String},
    login: {type: String, unique: true},
    password: {type: String},
}, {timestamps: true, });


const Teachers = mongoose.model("Teachers", teachersSchema);

module.exports =  Teachers