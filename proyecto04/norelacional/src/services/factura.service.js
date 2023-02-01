const httpStatus = require('http-status');
const { Factura } = require('../models');
const ApiError = require('../utils/ApiError');

const getFacturas = async (filter, options) => {
    const facturas = await Factura.find();
    return facturas;
    }

const getFacturaBynames = async (productsName) => {
    return Factura.find({"productName": {$in : productsName}});
}  

const getFacturasByCostumer = async (idCostumer) => {
    return Factura.find({"customerNumber": idCostumer, "status": "Shipped"});
}


    module.exports = {
        getFacturas,
        getFacturasByCostumer,
        getFacturaBynames,
      };