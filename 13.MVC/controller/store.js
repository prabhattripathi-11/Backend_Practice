const Home = require('../models/homes');

exports.getHomeList = (req, res, next) => {
  const homes = Home.fetchAll();
  res.render('store/home-list', {
    pageTitle: 'Home List',
    activeTab: 'home-list',
    homes: homes
  });
};

exports.getHomeDetail = (req, res, next) => {
  const homes = Home.fetchAll();
  const home = homes[0] || null;
  res.render('store/home-detail', {
    pageTitle: 'Home Details',
    activeTab: 'home-detail',
    home: home,
    homes: homes
  });
};

exports.getFavouriteList = (req, res, next) => {
  const homes = Home.fetchAll().slice(0, 3);
  res.render('store/favourite-list', {
    pageTitle: 'Favourite Homes',
    activeTab: 'favourite-list',
    homes: homes
  });
};

exports.getReserve = (req, res, next) => {
  const homes = Home.fetchAll();
  const home = homes[0] || null;
  res.render('store/reserve', {
    pageTitle: 'Reserve a Home',
    activeTab: 'reserve',
    home: home,
    homes: homes
  });
};

exports.getBookings = (req, res, next) => {
  const homes = Home.fetchAll();
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    activeTab: 'bookings',
    homes: homes
  });
};
