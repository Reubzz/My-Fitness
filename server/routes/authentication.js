// Imports
const express = require('express');
const router = express.Router();
require("dotenv").config();

// Databases
const usersDB = require("../schema/usersDB");
const DB_URI = process.env.NODE_ENV === 'development' ? process.env.DEV_DB_URI : process.env.DB_URI;

// Middlewares
const authSys = require('authjs')({
    dbUri: DB_URI,
    jwtSecretKey: process.env.jwt,
    cookieFields: {
        email: true,
        _id: true,
        role: true,
        createdAt: true
    },
    loginExpiryIn: process.env.loginMaxAge,
    uniqueLoginField: "email"
});

// Routes
router.post("/login", (req, res) => {
    console.log(req.body)
    authSys.login({
        fields: {
            email: req.body.email,
            password: req.body.password
        },
        Schema: usersDB,
        response: res
    }).then((data) => {
        res.status(200).json({
            code: 200,
            message: "Login Success",
            data: data
        })
    }).catch((err) => {
        res.status(400).json({
            code: 400,
            message: err.message
        })
    })
})

router.post("/register", (req, res) => {
    console.log(req.body)
    
    authSys.register({
        fields: {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            createdDate: Date.now()
        },
        Schema: usersDB,
        response: res
    }).then((data) => {
        res.status(200).json({
            code: 200,
            message: "Login Success",
            data: data
        })
    }).catch((err) => {
        res.status(400).json({
            code: 400,
            message: err.message
        })
        console.log(err)
    })
})

router.get('/logout', (req, res) => {
    authSys.logout({
        response: res
    })
    res.status(200).json({ 
        code: 200,
        message: "Logged Out successfully"
    })
})


module.exports = router;
