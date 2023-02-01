const express = require('express');

const router = express.Router();

router
    .route('/')
    .post((req, res) => {
        const { products } = req.body;
        const priceEach = products.map((product) => product.priceEach);
        const quantityOrdered = products.map((product) => product.quantityOrdered);
        const array = priceEach.map((price, index) => ({ price, quantity: quantityOrdered[index] }));
        const totalEach = array.map((product) => product.price * product.quantity);
        const total = totalEach.reduce((a, b) => a + b, 0);
        res.send({ total });
    });


module.exports = router;