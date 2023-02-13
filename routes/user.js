const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router
  .post('/', userController.createUser)
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUser)
  .put('/:id', userController.replaceUser)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser);

exports.router = router;  