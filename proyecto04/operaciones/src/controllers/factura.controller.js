const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { facturaService } = require('../services');

const getFacturas = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await facturaService.queryFacturas(filter, options);
    res.send(result);
    }
   );

   const getFacturaBynames = catchAsync(async (req, res) => {
    const factura = await facturaService.getFacturaBynames(req.body.productsName);
    if (!factura) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Factura not found');
      }
    res.send(factura);
  });

const getByCostumer = catchAsync(async (req, res) => {
    const factura = await facturaService.getFacturasByCostumer(req.params.idCustomer);
    if (!factura) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Factura not found');
      }
    res.send(factura);
  });

    module.exports = {
        getFacturas,
        getByCostumer,
        getFacturaBynames
      };
      