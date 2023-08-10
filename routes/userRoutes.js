const userController = require('../controller/userController')
const express = require('express');
const userRouter = express.Router()

userRouter.post('/users', userController.createUser)
    .get('/users', userController.getUsers)
    .get('/users/:id', userController.getUser)
    .put('/users/:id', userController.replaceUser)
    .patch('/users/:id', userController.updateUser)
    .delete('/users/:id', userController.deleteUser);

exports.userRouter = userRouter;