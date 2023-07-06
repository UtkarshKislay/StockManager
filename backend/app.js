import express from 'express';
import router from './routes/index.js';
import ConnectDb from './db/dbConnect.js';
const app=express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

ConnectDb();

app.use('/api',router);

app.listen(5000,()=>{
    console.log('server is listening at 5000');
})