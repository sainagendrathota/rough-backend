const mongoose = require("mongoose");

//farmer model
 const Doctor = mongoose.Schema({
      name:String,
      Email_ID:String,
      password:String,
      district:String,
      state:String,
      phone_number:Number,
      language:String,
      pdf:{
        type:String,
        required:true
      }

  // no need of language

  });

module.exports = mongoose.model("doctor",Doctor);