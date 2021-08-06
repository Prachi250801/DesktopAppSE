const mongoose = require('mongoose')
const input2Schema = new mongoose.Schema([{
    course:{
        type:String
    },
    enrollment:{
        type:String
    },
    preference:{
        type:String
    }
}]);
const INPUT2 = mongoose.model('INPUT2',input2Schema);
module.exports=INPUT2;