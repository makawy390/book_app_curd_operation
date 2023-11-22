const express = require('express');

const router = express.Router();
const {getAllUsers , register , login , updateUser , deleteUser} = require('../controller/user.controller');
const verifyToken = require('../middleWare/verifyToken');

router.route('/')
.get(verifyToken,getAllUsers);

router.route('/register')
.post(register);

router.route('/login')
.post(login);

router.route('/update-profile/:id')
.patch(verifyToken,updateUser);

router.route('/delete-profile/:id')
.delete(deleteUser);

module.exports = router;
