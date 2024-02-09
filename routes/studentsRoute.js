const express = require('express');
const Students = require('../models/studentsSchema');
const userName = require('../middleware/generateUser');
const router =express.Router(); 
const multer  = require('multer');
const path = require('path');



const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "./uploads");
        },
        filename: function(req, file, callback) {
            callback(null, file.filename + "-" + Date.now() + path.extname(file.originalname))
        }
    })
});

// upload.single('image')

router.post('/students', userName, async (req, res) =>{
    // const username = generateUsername(".", 5, 20, req.body.firstname + req.body.lastname);
    const student = new Students({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathername: req.body.fathername,
        grade: req.body.grade,
        image: req.body.image,
        login: req.body.username,
        password: '12345678',
    });

    const result = await student.save();
    if (result) {
        console.log("Muvaffaqiyatli saqlandi");
        res.send(result)
    } else {
        console.log("Saqlash jarayonoda hatolik");
    }
  
});


router.get('/students/:grade',async (req, res) =>{
    const grade = await Students.find({grade: req.params.grade})
    if(grade.length !== 0){
        res.status(200).send(grade) 
    }
    else{
        res.status(404).send("Bunday sinf yo'q")
    }
})

router.delete('/students/:id', async (req, res) =>{
    const student = await Students.findByIdAndDelete(req.params.id);
    if(student){
        res.status(200).send(student)
    }
    else{
        res.status(404).send("Bunday o'quvchi  mavjud emas")
    }

});


module.exports =  router;


