const express = require('express');
const Students = require('../models/studentsSchema');
const router =express.Router(); 


router.put('/ratings/:id', async (req, res) => {
    try {
        const updateField = {};
        updateField["ratings." + req.body.science] = 50;

        const student = await Students.findByIdAndUpdate(
            req.params.id, 
            { $push: updateField },
            { new: true }
        );

        if (student) {
            res.status(200).send(student);
        } else {
            res.status(404).send("Yangilashda hatolik");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi");
    }
});



module.exports =  router;
