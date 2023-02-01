const express = require('express');
const facturasRoute = require('./factura.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/facturas',
    route: facturasRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
