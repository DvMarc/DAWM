const express = require('express');
const facturaController = require('../../controllers/factura.controller');

const router = express.Router();

router
    .route('/')
    .get(facturaController.getFacturas)
    .post(facturaController.getFacturaBynames)

router
    .route('/:idCustomer')
    .get(facturaController.getByCostumer)
module.exports = router;