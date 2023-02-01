var express = require('express');
const axios = require('axios')
var router = express.Router();

const multer  = require('multer')
const FormData = require('form-data');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const URL = 'http://localhost:3000/customers/findAll/json'
  const response = await axios.get(URL)
  res.render('index', { title: 'Express', customers: response.data });
});

router.get('/costumer/:idCostumer', async function(req, res, next) {
  const { idCostumer } = req.params
  const URL = 'http://localhost:3001/V1/facturas/'+idCostumer
  const response = await axios.get(URL)
  const URL2 = 'http://localhost:3002/V1/operaciones'
  const response2 = await axios.post(URL2, {products: response.data})
  console.log(response2.data)
  res.render('costumers', { title: 'Express', costumers: response.data , operaciones: response2.data.total});
})

router.get('/products', async function(req, res, next) {
  const URL = 'http://localhost:3001/V1/facturas'
  const response = await axios.get(URL)
  let set = new Set()
  response.data.map( item => { set.add(item.productName) } )
  res.render('products', { title: 'Express', products: set });
})

router.post('/set', async function(req, res, next) {
  const URL = 'http://localhost:3001/V1/facturas'
  const response = await axios.post(URL, req.body)
  res.render('prodfac', { title: 'Express', products: response.data });
}

)

module.exports = router;
