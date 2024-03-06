const mongoose =  require('mongoose');

const subjectSchema = new mongoose.Schema({
  subject: {type: [String]}
})

const teachersSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    fathername: {type: String, required: true},
    science: {
        type: Map,
        of: [String],
      },
    image: {type: String},
    role: {type: String},
    login: {type: String, unique: true},
    password: {type: String},
}, {timestamps: true, });


const Teachers = mongoose.model("Teachers", teachersSchema);

module.exports =  Teachers