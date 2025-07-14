import {config}from 'dotenv';
import express from 'express';
import  products_router from './routes/products_router.js';
import  customers_router  from './routes/customers_router.js';
import employees_router from 'routes/employees_route.js'
config();

const server  = express()

const PORT = process.env.SERVER_PORT 


server.use('/customers',customers_router);

server.use('/products',products_router);

server.use('/employees',employees_router);

server.listen(PORT,()=>{
    console.log('Server running at http://localhost:',PORT)
})

export default server;