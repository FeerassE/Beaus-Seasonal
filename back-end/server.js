var express = require('express')
var request = require('request');
var bodyparser = require('body-parser');
var app = express();
var cors = require('cors')

 
const apiKey = 'MDo2NGY4MDgzMi04OWQ3LTExZTctOWM0OS1mN2VkOWI0NDI4MjU6a09uZFhqQU9DZ2YweDBiZGFoZ1JOSlVFT0o3SmVGeTB1b3kx';

app.use(cors());


  
// Gets and queries an object of Beau's seasonal products 
app.get('/', (req, res) => {
  request(`https://lcboapi.com/products?where=is_seasonal&where_not=is_dead,is_discontinued&q=beaus+all+natural&access_key=${apiKey}`, (error, response, body) => {
    res.send(body)
  })
})
 
// Gets an object of available stores data for a single product
app.get('/beer/store/:product_id', (req,res) => {
  let product_id = req.params.product_id;
  console.log("this is the product id for the call to lcbo store:" + product_id);
  request(`https://lcboapi.com/stores?product_id=${product_id}&access_key=${apiKey}`, (error, response, body) => {
    res.send(body)
  })
})

// Gets an object of single beer data
app.get('/beer/:id', (req,res) => {
  let id = req.params.id;
  console.log("this is the id for just the product:" + id);
  request(`https://lcboapi.com/products/${id}?access_key=${apiKey}`, (error, response, body) =>{
    res.send(body)
  })
})


app.listen(8080, ()=> {
  console.log('Im listening.')
})