const express = require('express');
const Members = require('../Models/Member');
const router = express.Router();

// CRUD


router.get('/',async (req,res)=>{
    const members = await Members.find();
    res.status(200).json({
        members
    });
})

router.post('/', async (req,res)=>{
    const payload = req.body;
    console.log("payload",payload);

    const members = await Members.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age,
        gender: payload.gender
    });
    res.status(200).json({
        message: 'Create a new member',
        members
    });
});

router.delete('/:id', async(req, res)=>{
    console.log('params', req.params);
    const id = req.params.id;
    const resp = await Members.deleteOne({_id:id})
    console.log('resp', resp);
    res.status(200).json({
        message: 'deleted'
    })
})

module.exports = router;