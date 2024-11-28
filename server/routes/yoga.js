// Imports
const express = require('express');
const router = express.Router();

// Databases
const yogaDB = require("../schema/yogaDB");

// Middlewares

// Routes
router.get("/", async (req, res) => {
    try {
        const data = await yogaDB.find().exec();
        res.status(200).json({
            cdoe: 200,
            message: "Yoga Data fetched successfully from database.",
            data: data
        })
    } catch (err) {
        console.error(err);
        res.status(400).json({
            code: 400,
            message: "Error fetching yoga data from database.",
        })
    }
})

router.post("/", async (req, res) => {
    try {
        rawData = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            videoUrl: req.body.imageUrl,
            type: req.body.type,
            duration: req.body.duration
        }
        await yogaDB.create(rawData).then((data) => {
            res.status(200).json({
                code: 200,
                message: "Added Yoga exercise",
                data: data
            })
        })
    } catch (err) {
        console.error(err);
        res.status(400).json({
            code: 400,
            message: "Error adding yoga exercise",
            data: rawData,
            error: err
        })
    }
})
router.delete("/", async (req, res) => {
    try {
        await yogaDB.deleteOne({ _id: req.body._id }).then((d) => {
            res.status(200).json({
                code: 200,
                message: "Yoga Data deleted to Database.",
                data: d
            })
        });
    } catch (err) {
        console.log(err)
        res.status(400).json({
            code: 400, 
            message: "Error deleting Yoga Data from Database.",
            data: req.body._id,
            error: err
        })
    }
})

module.exports = router;
