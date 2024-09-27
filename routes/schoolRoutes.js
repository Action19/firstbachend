const express = require('express');
const Schools = require('../models/SchoolSchema');
const router =express.Router(); 



router.post('/schools', async (req, res) =>{
    try {
        const school = new Schools({
            schoolname: req.body.schoolname
        });
        if(school){
            const saveSchool = await school.save();
            res.status(200).send(saveSchool);
        } else {
            res.status(404).send("Maktab yaratishda hatolik");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});

router.get('/schools', async (req, res) =>{
    try {
        const school = await Schools.find();
        if(school.length !== 0){
            res.status(200).send(school);
        } else {
            res.status(404).send("Maktab ma'lumotlarini olib bo'lmadi");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});

router.delete('/schools/:id', async (req, res) =>{
    const school = await Schools.findByIdAndDelete(req.params.id);
    if(school){
        res.status(200).send(school)
    }
    else{
        res.status(404).send("Bunday o'quvchi  mavjud emas")
    }

});

module.exports =  router;