const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const facturaSchema = mongoose.Schema(
    {
        orderNumber: {
            type: Number,
            required: true,
            trim: true,
        },
        orderDate: {
            type: Date,
            required: true,
            trim: true,
        },
        requiredDate: {
            type: Date,
            required: true,
            trim: true,
        },
        shippedDate: {
            type: Date,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
        comments: {
            type: String,
            required: true,
            trim: true,
        },
        customerNumber: {
            type: Number,
            required: true,
            trim: true,
        },
        orderNumber__1: {
            type: Number,
            required: true,
            trim: true,
        },
        productCode: {
            type: String,
            required: true,
            trim: true,
        },
        quantityOrdered: {
            type: Number,
            required: true,
            trim: true,
        },
        priceEach: {
            type: Number,
            required: true,
            trim: true,
        },
        orderLineNumber: {
            type: Number,
            required: true,
            trim: true,
        },
        productCode__1: {
            type: String,
            required: true,
            trim: true,
        },
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        productLine: {
            type: String,
            required: true,
            trim: true,
        },
        productScale: {
            type: String,
            required: true,
            trim: true,
        },
        productVendor: {
            type: String,
            required: true,
            trim: true,
        },
        productDescription: {
            type: String,
            required: true,
            trim: true,
        },
        quantityInStock: {
            type: Number,
            required: true,
            trim: true,
        },
        buyPrice: {
            type: Number,
            required: true,
            trim: true,
        },
        MSRP: {
            type: Number,
            required: true,
            trim: true,
        },
        productLine__1: {
            type: String,
            required: true,
            trim: true,
        },
        textDescription: {
            type: String,
            required: true,
            trim: true,
        },
        htmlDescription: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        }
    }
)

facturaSchema.plugin(toJSON);
facturaSchema.plugin(paginate);

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;