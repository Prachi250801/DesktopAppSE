const mongoose = require('mongoose')
const input1Schema = new mongoose.Schema({
course :[String],
room:[String],
capacity :[String],
timing :[String]
      
});
const INPUT1 = mongoose.model('INPUT1',input1Schema);
module.exports=INPUT1;