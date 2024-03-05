const mongoose =  require('mongoose');

const scienceSchema = new mongoose.Schema({
    science: {type: String, required: true},
}, {timestamps: true, });


const Science = mongoose.model("Sciences", scienceSchema);

module.exports =  Science