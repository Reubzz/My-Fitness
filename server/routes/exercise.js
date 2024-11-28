// Imports
const express = require('express');
const router = express.Router();

// Databases
const exerciseDB = require("../schema/exerciseDB");

// Middlewares

// Routes
router.get("/", async (req, res) => {
    try {
        const data = await exerciseDB.find().exec();
        res.status(200).json({
            code: 200,
            message: "Exercise Data fetched from Database.",
            data: data
        })
    } catch(err) {
        console.error(err);
        res.status(400).json({
            code: 400,
            message: "Error fetching exercise data",
        })
    }
})
router.post("/", async (req, res) => {
    try {
        rawData = {
            name: req.body.name,
            description: req.body.description,
            bodyPart: req.body.bodyPart,
            imageUrl: req.body.imageUrl,
            videoUrl: req.body.videoUrl,
            type: req.body.type,
            duration: req.body.duration
        }
        await exerciseDB.create(rawData).then((data) => {
            res.status(200).json({
                code: 200,
                message: "Exercise Data added to Database.",
                data: data
            })
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            code: 400, 
            message: "Error adding Exercise Data to Database.",
            data: rawData,
            error: err
        })
    }
})
router.delete("/", async (req, res) => {
    try {
        await exerciseDB.deleteOne({ _id: req.body._id});
        res.status(200).json({
            code: 200,
            message: "Exercise Data deleted to Database.",
            data: req.body._id
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            code: 400, 
            message: "Error deleting Exercie Data from Database.",
            data: req.body._id
        })
    }
})

module.exports = router;
