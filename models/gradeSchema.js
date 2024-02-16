const mongoose =  require('mongoose');

const gradeSchema = new mongoose.Schema({
    gradename: {type: String, required: true},
}, {timestamps: true, });


const Grades = mongoose.model("Grades", gradeSchema);

module.exports =  Grades