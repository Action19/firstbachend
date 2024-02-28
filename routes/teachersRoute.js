const express = require('express');
const Teachers = require('../models/teachersSchema');
const userName = require('../middleware/generateUser');
const router =express.Router(); 
const multer  = require('multer');
const path = require('path');
const cors = require('cors');



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

router.post('/teachers', userName, cors(),  async (req, res) =>{
    // const username = generateUsername(".", 5, 20, req.body.firstname + req.body.lastname);
    const teacher = new Teachers({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathername: req.body.fathername,
        science: req.body.science,
        image: req.body.image,
        login: req.body.username,
        password: '12345678',
    });

    const result = await teacher.save();
    if (result) {
        console.log("Muvaffaqiyatli saqlandi");
        res.send(result)
    } else {
        console.log("Saqlash jarayonoda hatolik");
    }
  
});


// router.get('/students/:id',async (req, res) =>{
//     const student = await Students.find({_id: req.params.id})
//     if(student.length !== 0){
//         res.status(200).send(student) 
//     }
//     else{
//         res.status(404).send("Bunday o'quvchi yo'q")
//     }
// })
// router.put('/students/:id', async (req, res) => {
//     try {
//         const student = await Students.findByIdAndUpdate(
//             req.params.id, 
//             { ...req.body },
//             { new: true }
//         );
//         if (student) {
//             res.status(200).send(student);
//         } else {
//             res.status(404).send("Yangilashda hatolik");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Serverda xatolik yuz berdi");
//     }
// });

router.get('/teachers',async (req, res) =>{
    const data = await Teachers.find()
    if(data.length !== 0){
        res.status(200).send(data) 
    }
    else{
        res.status(404).send("Hatolik yuz berdi")
    }
})

// router.delete('/students/:id', async (req, res) =>{
//     const student = await Students.findByIdAndDelete(req.params.id);
//     if(student){
//         res.status(200).send(student)
//     }
//     else{
//         res.status(404).send("Bunday o'quvchi  mavjud emas")
//     }

// });


module.exports =  router;


