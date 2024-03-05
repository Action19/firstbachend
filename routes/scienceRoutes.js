const express = require('express');
const Science = require('../models/scienseSchema');
const router =express.Router(); 



router.post('/sciences', async (req, res) =>{
    try {
        const newScience = new Science({
            science: req.body.science
        });
        if(newScience){
            const saveScience = await newScience.save();
            res.status(200).send(saveScience);
        } else {
            res.status(404).send("Fan yaratishda hatolik");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});

router.get('/sciences', async (req, res) =>{
    try {
        const science = await Science.find();
        if(science.length !== 0){
            res.status(200).send(science);
        } else {
            res.status(404).send("Fan ma'lumotlarini olib bo'lmadi");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Serverda xatolik yuz berdi"); 
    }

});

router.delete('/sciences/:id', async (req, res) =>{
    const science = await Science.findByIdAndDelete(req.params.id);
    if(science){
        res.status(200).send(science)
    }
    else{
        res.status(404).send("Bunday fan  mavjud emas")
    }

});

module.exports =  router;