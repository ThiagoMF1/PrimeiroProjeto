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

    if(await userModel.findOne({email})){
        return res.status(400).json({
            error: true,
            message:'el usuario ya tiene registro'
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

    const user =await userModel.findOne({email}).select('+password');

    if(!user) {
        return res.status(400).json({
            error: true,
            message:'usuario no encontrado'
        })
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({
            error:true,
            message:'contraseña invalida'
        })
    }

    user.password = undefined;

    return res.json({
        user,
        token: generateToken(user)
    });
})

module.exports = router;