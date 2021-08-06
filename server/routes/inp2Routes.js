const express = require('express')
const inp2Controller = require('./../controllers/inp2Controller');
const router = express.Router();

///////////Routes/////////////
router
.route('/')
.post(inp2Controller.addinput2)
.get(inp2Controller.getallinput2)
module.exports=router;