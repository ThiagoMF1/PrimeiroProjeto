const express = require('express');
const moment = require('moment');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
    const users = await User.find({}, {
      _id: 1,
      name: 1,
      email: 1,
      createdAt: 1
    });
    if (!users) {
      return res.status(404).json({ message: 'No se encontraron usuarios' });
    } 
    else {
      let listadeUsuarios = users.map(e => ({
        nombre: e.name,
        correoeletronico: e.email,
        datadecriacao: moment.utc(e.createdAt).format("DD/MM/YYYY HH:mm:ss")
      }))
      return res.json(listadeUsuarios);
    }
  });


module.exports = router;