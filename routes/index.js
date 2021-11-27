const colorsRouter = require('./colors');
const flavorsRouter = require('./flavors');

function routerApi (app) {
  app.use('/colors', colorsRouter);
  app.use('/flavors', flavorsRouter);
}

module.exports = routerApi;
