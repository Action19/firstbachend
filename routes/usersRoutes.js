const express = require('express');
const Users = require('../models/userSchema');
const router =express.Router(); 



router.post('/users', async (req, res) =>{
    const user = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
    });

    const saveUser = await user.save();
    res.send(saveUser);

});


router.get('/users/:id', async (req, res) =>{
    const user = await Users.findById(req.params.id)
    res.send(user);

});

router.put('/users/:id', async (req, res) =>{
    const user = await Users.findById(req.params.id);
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    await user.save();
    res.send(user);

});

router.delete('/users/:id', async (req, res) =>{
    const user = await Users.findByIdAndDelete(req.params.id);
    res.send(user)

});


router.get('/users', async (req, res) =>{
    const user = await Users.find().lean();
    res.send(user);

});

router.get('/users/:id', async (req, res) =>{
    const user = await Users.findById(req.params.id).lean();
    res.send(user);

});

module.exports =  router;