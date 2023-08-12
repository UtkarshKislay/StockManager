import express from 'express';
import product from './routes/product.js';
import orders from './routes/orders.js';
import ConnectDb from './db/dbConnect.js';
import register from './routes/registraion.js';
import bodyParser from 'body-parser';
const app=express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.json());
app.use(bodyParser.json());
ConnectDb();

app.use('/api',product);
app.use('/api',orders);
app.use('/api',register);

app.listen(5000,()=>{
    console.log('server is listening at 5000');
})