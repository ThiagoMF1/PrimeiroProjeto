const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

const userModel = require('../models/user');

const router = express.Router();

const generateToken = (user = {}) => {
    return jwt.sign({
        id: user.id,
        name: user.name
    },authConfig.secret , {
        expiresIn: 86400
    });

}

router.post('/register', async(req, res) => {

    const {email} = req.body;

    const scUser = await userModel.countDocuments({email})

    if(scUser != 0){
        return res.status(400).json({
            error: true,
            message:'The user already has a registration'
        })
    }

    const user = await userModel.create(req.body);

    user.password = undefined;
    
    return res.json({
        user,
        token: generateToken(user)
    });
} )

router.post('/login', async(req, res) => {
    
    const {email, password} = req.body;

    const user =await userModel.findOne({email});

    if(!user) {
        return res.status(400).json({
            error: true,
            message:'Invalid username or password'
        })
    } 

    let comparePass = await bcrypt.compare(password, user.password)    
    
    if(!comparePass){
        return res.status(400).send({
            error:true,
            message:'Invalid username or password'
        })
    }    

    if (user.archived) {
        return res.status(400).json({
            error: true,
            message: "User Archived"
    })
    }

    let dataReturn = {
        nome: user.name,
        email: user.email,
        _id: user._id
    }

    return res.json({
        data: dataReturn,
        token: generateToken(user)
    });
})

module.exports = router;