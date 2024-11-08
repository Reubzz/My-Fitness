const mongoose = require('../db.js')

/**
 * 
 *  Documentation : Symbols used
 *      ! means this field is REQUIRED
 *      ? Means it has a default value if not provided 
 *      * Additional Data not compulsory but needed. 
 */

const model = mongoose.MAIN_DB.model(
    'user',
    new mongoose.Schema({
        password: { type: String, required: true }, // ! hashed password of the used
        name: { type: String, required: true }, // ! Name of the user
        email: { type: String, required: true }, // ! Email of the user
        createdDate: { type: Date, required: true }, // ! Date of Account Creation
        phone: { type: Number, required: false }, // * Contact Number of the user
        age: { type: Date, required: false }, // * Date of birth 
        profileImg: { type: String, required: false, default: "https://reubz.s3.ap-south-1.amazonaws.com/default-user-img.png"}, // ? Profile Image of the user. Defualts to basic image if not provided.

        role: { type: String, required: false, default: 'basic'}
    })
)
module.exports = model;