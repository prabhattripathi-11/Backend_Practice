const express = require('express');
const userRouter = express.Router();

const storeController = require('../controller/store');
const adminController = require('../controller/admin');

userRouter.get('/', storeController.getHomeList);
userRouter.get('/store/home-list', storeController.getHomeList);
userRouter.get('/store/home-detail', storeController.getHomeDetail);
userRouter.get('/store/favourite-list', storeController.getFavouriteList);
userRouter.get('/store/reserve', storeController.getReserve);
userRouter.get('/store/bookings', storeController.getBookings);

userRouter.get('/admin/home-list', adminController.getAdminHomeList);
userRouter.get('/admin/edit-home', adminController.getEditHome);
userRouter.get('/admin/delete-home', adminController.getDeleteHome);

module.exports = userRouter;