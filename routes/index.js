const colorsRouter = require('./colors.router');
const flavorsRouter = require('./flavors.router');

function routerApi (app) {
  app.use('/colors', colorsRouter);
  app.use('/flavors', flavorsRouter);
}

module.exports = routerApi;
