const express = require('express');
const operacionesRoute = require('./operaciones.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/operaciones',
    route: operacionesRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
