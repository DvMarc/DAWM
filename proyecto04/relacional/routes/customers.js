var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Customers = require('../models').customers;  

router.get('/findAll/json', function(req, res, next) {  

	
    Customers.findAll({  
        attributes: { }  
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;
