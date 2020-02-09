const root     = require('../controllers/root');
const gallery  = require('../controllers/gallery');
const video    = require('../controllers/video');
const files    = require('../controllers/files');
const articles = require('../controllers/articles');
const lod      = require('../controllers/lod');
const shana    = require('../controllers/shana');

module.exports = app => {
  app.get('/', root.home);
  app.get('/projects', root.projects);
  app.get('/adminsite', root.adminsite);
  app.get('/promo', root.promo);
  app.get('/gb', root.gb);
  app.get('/feedback', root.feedback);

  app.get('/gallery/detail/:image', gallery.image);
  app.get('/gallery/:category/:page', gallery.category);
  app.get('/gallery/:category', gallery.category);

  app.get('/video/detail/:videoSlug', video.detail);
  app.get('/video/:category/:page', video.category);
  app.get('/video/:category', video.category);

  app.get('/files/detail/:fileSlug', files.detail);
  app.get('/files/:category/:page', files.category);
  app.get('/files/:category', files.category);

  app.get('/articles/detail/:articleSlug', articles.detail);
  app.get('/articles/:category/:page', articles.category);
  app.get('/articles/:category', articles.category);


  app.get('/lod', lod.info);
  app.get('/lod/worldmap', lod.worldmap);
  app.get('/lod/faq', lod.faq);

  app.get('/shana', shana.info);
  app.get('/shana/music', shana.music);
};