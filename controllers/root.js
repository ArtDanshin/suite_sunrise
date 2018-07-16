const path = require('path');
const fs = require('fs');

exports.home = function(req, res) {
  const news = JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'news.json'), 'utf8'));

  res.render('main', { pageTitle: 'Главная страница', news });
};

exports.projects = function(req, res) {
  const projects = JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'projects.json'), 'utf8'));

  res.render('projects', { pageTitle: 'Информация о проектах сайтов', projects });
};

exports.adminsite = function(req, res) {
  res.render('adminsite', { title: '' });
};

exports.promo = function(req, res) {
  res.render('promo', { title: '' });
};

exports.gb = function(req, res) {
  res.render('gb', { title: '' });
};

exports.feedback = function(req, res) {
  res.render('feedback', { title: '' });
};