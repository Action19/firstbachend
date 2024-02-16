const express = require('express');
const Grades = require('../models/gradeSchema');
const router =express.Router(); 



router.post('/grades', async (req, res) =>{
    try {
        const grade = new Grades({
            gradename: req.body.gradename
        });
        if(grade){
            const saveGrade = await grade.save();
            res.status(200).send(saveGrade);
        } else {
            res.status(404).send("Sinf yaratishda hatolik");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});

router.get('/grades', async (req, res) =>{
    try {
        const grade = await Grades.find();
        if(grade.length !== 0){
            res.status(200).send(grade);
        } else {
            res.status(404).send("Sinf ma'lumotlarini olib bo'lmadi");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});


module.exports =  router;