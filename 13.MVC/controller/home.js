
const Home = require('../models/homes');

exports.getAddHome = (req, res, next) => {
  res.render('addhome', { activeTab: 'add-home' });
};

exports.postAddHome = (req, res, next) => {
  const { title, price, location, rating, photo } = req.body;
  const home = new Home(title, price, location, rating, photo);
  home.save();
  res.render('homeadded', { pageTitle: 'Home added' });
};

exports.getHome= (req, res, next) => {
  const homes = Home.fetchAll();
  res.render('home', { homes: homes, pageTitle: 'Home List' });
}