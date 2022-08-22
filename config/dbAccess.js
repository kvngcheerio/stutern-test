require("dotenv").config({silent: true});
const mongoose = require('mongoose');



const dbConnect = async() => {
    try{
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/stutern_db', {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      }
      catch(e){
        console.log("Error connecting to database", e.message)
      }
    }
 module.exports = {
     dbConnect
 }