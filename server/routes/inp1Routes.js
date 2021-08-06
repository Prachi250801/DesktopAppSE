const express = require('express')
const inp1Controller = require('./../controllers/inp1Controller');
const router = express.Router();

///////////Routes/////////////
router
.route('/')
.post(inp1Controller.addinput1)
.get(inp1Controller.getallinput1)
module.exports=router;