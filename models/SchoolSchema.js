const mongoose =  require('mongoose');

const schoolSchema = new mongoose.Schema({
    schoolname: {type: String, required: true},
}, {timestamps: true, });


const Schools = mongoose.model("Schools", schoolSchema);

module.exports =  Schools