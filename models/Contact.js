
const { ContactImgSchema } =require('./ContactImg');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
Underscoreid:String , 


fullName:String , 


role:String , 


img:  
ContactImgSchema
 , 


company:String , 


help:String , 


interaction:String , 


outcome:String , 


email:String , 


phone:Number 



})

module.exports = {
  Contact : mongoose.model('contact', contactSchema),
}

