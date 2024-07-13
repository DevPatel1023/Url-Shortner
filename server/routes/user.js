const express = require('express');
const router = express.Router();
const User = require('../models/user');

//handle post method for login

router.post('/login',async(req,res)=>{
    const {userName , password} = req.body;
    try {
        const user = await User.findOne({ userName, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;