const express = require('express');
const hostRouter = express.Router();

const adminController = require('../controller/admin');

hostRouter.get('/add-home', adminController.getAddHome);
hostRouter.post('/add-home', adminController.postAddHome);

exports.hostRouter = hostRouter;
