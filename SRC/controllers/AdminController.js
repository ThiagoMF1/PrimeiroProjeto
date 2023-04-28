const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
    const users = await User.find().exec();
    if (!users) {
      return res.status(404).json({ message: 'No se encontraron usuarios' });
    } 
    else {
      return res.json(users);
    }
  });


module.exports = router;