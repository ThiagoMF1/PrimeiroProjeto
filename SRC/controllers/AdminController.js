const express = require('express');
const moment = require('moment');
const router = express.Router();
const User = require('../models/user');
const validator = require('validator');

router.get('/users', async (req, res) => {
    const users = await User.find({}, {
      _id: 1,
      name: 1,
      email: 1,
      createdAt: 1
    });
    if (!users) {
      return res.status(404).json({ message: 'No users found' });
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
  router.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({
          error: true,
          message: 'User not found',
        });
      }

      return res.json({
        message: 'User deleted successfully', //não necessario, apenas demonstração
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: 'Error deleting user',
      });
    }
  });

  router.patch('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({
          error: true,
          message: 'User not found',
        });
      }
  
      if (updatedData.name) {
        user.name = updatedData.name;
      }
      if (updatedData.email) {
        if (!validator.isEmail(updatedData.email)) {
          return res.status(400).json({
            error: true,
            message: 'Invalid email',
          });
        }
        user.email = updatedData.email;
      }
      if (updatedData.password) {
        user.password = updatedData.password;
      }
      if (updatedData.archived) {
        user.archived = updatedData.archived;
      }
  
      await user.save();
  
      return res.json({
        message: 'User updated successfully',
        user: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: true,
        message: 'Error updating user',
      });
    }
  });
  
  module.exports = router;