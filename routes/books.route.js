const express = require("express");

const router = express.Router();
const {addBook , getAllBooks , get_single_book , update_book , delete_book} = require('../controller/books.controller');
const verifyToken = require("../middleWare/verifyToken");
const allowedTo = require("../middleWare/allowedTo");

router.route('/add')
.post(verifyToken,allowedTo('admin', 'manager'), addBook);

router.route('/')
.get(verifyToken,getAllBooks);

router.route('/view/:id')
.get(get_single_book); 

router.route('/update/:id')
.patch(verifyToken,allowedTo('admin', 'manager') , update_book);

router.route('/delete/:id')
.delete(verifyToken, allowedTo('admin', 'manager') ,  delete_book);


module.exports = router;
