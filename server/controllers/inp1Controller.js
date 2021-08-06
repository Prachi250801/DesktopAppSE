const mongoose = require('mongoose')
const app = require('./../app')
const INPUT1 = require('./../models/input1Model')
exports.getallinput1= async (req,res)=>{    
    try{
       const input1 = await INPUT1.find();
        res
        .status(200)
        .json({
            status:'success',
            results:input1.length,
            data:{
                input1
            }
    
        });
    }catch(err){
        res.send(404).json({
            message:err
        })
    }
   

};

//////add 
exports.addinput1 = async (req,res)=>{
   const newInput1 = await INPUT1.create( req.body );
    res.status(201).json({

        status:'success',
        data:{
         newInput1
        }
        
    });
};
