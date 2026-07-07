const Home = require('../models/homes');

exports.getAddHome = (req, res, next) => {
  res.render('admin/add-home', {
    pageTitle: 'Add Home',
    activeTab: 'add-home'
  });
};

exports.postAddHome = (req, res, next) => {
  const { title, price, location, rating, photo } = req.body;
  const home = new Home(title, price, location, rating, photo);
  home.save();
  res.render('admin/home-added', {
    pageTitle: 'Home Added',
    activeTab: 'add-home'
  });
};

exports.getAdminHomeList = (req, res, next) => {
  const homes = Home.fetchAll();
  res.render('admin/admin-home-list', {
    pageTitle: 'Admin Home List',
    activeTab: 'admin-home-list',
    homes: homes
  });
};

exports.getEditHome = (req, res, next) => {
  const homes = Home.fetchAll();
  const home = homes[0] || null;
  res.render('admin/edit-home', {
    pageTitle: 'Edit Home',
    activeTab: 'edit-home',
    home: home
  });
};

exports.getDeleteHome = (req, res, next) => {
  res.render('admin/delete-home', {
    pageTitle: 'Delete Home',
    activeTab: 'delete-home'
  });
};
