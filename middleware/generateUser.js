const { generateUsername } = require("unique-username-generator");
const Students = require('../models/studentsSchema');


async function userName(req, res, next) {
    if (req.body.firstname || req.body.lastname) {
        const username = generateUsername(".", 5, 20, req.body.firstname + ' ' + req.body.lastname);
        const student = await Students.find({ login: username })
        if(student.length === 0){
            req.body.username = username
        }
        else{
            req.body.username = username + String(Math.floor(Math.random(5)*1000))
        }

        
    }

    next()
}

module.exports = userName