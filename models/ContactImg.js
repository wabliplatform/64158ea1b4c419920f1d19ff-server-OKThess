
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactImgSchema = new Schema({
data:String , 
name:String 
});

module.exports = { ContactImgSchema };

