const mongoose = require('../db.js')

const model = mongoose.MAIN_DB.model(
    'yoga',
    new mongoose.Schema({
            name: { type: String, required: true },
            description: { type: String, required: true },
            imageUrl: { type: String, required: true },
            videoUrl: { type: String, required: true },
            duration: { type: String, required: false },
            type: { type: String, required: false },
        })
)

module.exports = model;
