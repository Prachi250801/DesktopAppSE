
const express = require ('express');///requiring express modules
const app = express();///utilizing all express methods
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.options('*',cors());
////Routing
const input1Router = require('./routes/inp1Routes')
const input2Router=require('./routes/inp2Routes')
app.use('/api/v1/Home/input1',input1Router);
app.use('/api/v1/Home/input2',input2Router);
module.exports=app;