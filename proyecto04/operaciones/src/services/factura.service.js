const httpStatus = require('http-status');
const { Factura } = require('../models');
const ApiError = require('../utils/ApiError');

const queryFacturas = async (filter, options) => {
    const facturas = await Factura.paginate(filter, options);
    return facturas;
    }

const getFacturaBynames = async (productsName) => {
    return Factura.find({"products.productName": productsName, "status": "Shipped"})
}  

const getFacturasByCostumer = async (idCostumer) => {
    return Factura.find({"customerNumber": idCostumer, "status": "Shipped"})
}

    module.exports = {
        queryFacturas,
        getFacturasByCostumer,
        getFacturaBynames
      };