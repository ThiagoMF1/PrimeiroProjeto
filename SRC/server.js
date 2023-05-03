const express = require('express');
const authController = require('./controllers/authController');
const AdminController = require('./controllers/AdminController');
const authenticateMiddleware = require('./middlewares/authenticate');
const usersRouter = require('./models/user');
const app = express();

app.use(express.json());

app.use('/auth', authController)
app.use('/admin', authenticateMiddleware , AdminController);
app.use('/users', usersRouter);


app.listen(3001,()=> {
    console.log('O servidor está funcionando');
})