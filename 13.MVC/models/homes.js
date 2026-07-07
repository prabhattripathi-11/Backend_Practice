const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');

const homeRegister = [];

module.exports = class Home {
  constructor(title, price, location, rating, photo) {
    this.title = title;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo || '';
  }

  save() {
    homeRegister.push(this);
    const homedatapath = path.join(rootDir, 'data', 'home.json');
    try {
      const dir = path.dirname(homedatapath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(homedatapath, JSON.stringify(homeRegister, null, 2));
    } catch (error) {
      console.error('Error writing home data:', error);
    }
  }

  static fetchAll() {
    const homedatapath = path.join(rootDir, 'data', 'home.json');
    try {
      fs.mkdirSync(path.dirname(homedatapath), { recursive: true });
      if (!fs.existsSync(homedatapath)) {
        return [];
      }
      const data = fs.readFileSync(homedatapath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading home data:', error);
      return [];
    }
  }
};
