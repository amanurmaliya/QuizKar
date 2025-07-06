require("dotenv").config()
const mongoose = require("mongoose");
function connectDb(){
    console.log(process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connection to the db done successfully")).catch((err)=> console.log(`Sorry Database connection failed due to ${err}`))   
}

module.exports = connectDb;
