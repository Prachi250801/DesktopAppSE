const mongoose = require('mongoose')
const app = require('./../app')
const INPUT2 = require('./../models/input2Model')
exports.getallinput2= async (req,res)=>{    
    try{
       const input2 = await INPUT2.find();
        res
        .status(200)
        .json({
            status:'success',
            results:input2.length,
            data:{
                input2
            }
    
        });
    }catch(err){
        res.send(404).json({
            message:err
        })
    }
   

};

//////add 
exports.addinput2 = async (req,res)=>{
   const newInput2 = await INPUT2.create( req.body );
    res.status(201).json({

        status:'success',
        data:{
         newInput2
        }
        
    });
};
