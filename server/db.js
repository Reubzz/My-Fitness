require("dotenv").config();
const mongoose = require('mongoose')

// Mongoose Config
const DB_URI = process.env.NODE_ENV === 'development' ? process.env.DEV_DB_URI : process.env.DB_URI;
mongoose.MAIN_DB = mongoose.createConnection(DB_URI)

setTimeout(() => {
    console.log("Database Connection Status : " + mongoose.MAIN_DB.readyState )
}, 2000)

module.exports = mongoose;