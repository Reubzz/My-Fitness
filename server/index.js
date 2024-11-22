require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = process.env.PORT;
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', '*'],
}));

// set headers for you to be able to set cookies on the browser
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// API routes 
app.use('/api/yoga', require(path.join(__dirname, "/routes/yoga.js")));
app.use('/api/exercise', require(path.join(__dirname, "/routes/exercise.js")))
app.use('/api/auth', require(path.join(__dirname, "/routes/authentication.js")))

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    const isInDevelopment = process.env.NODE_ENV === "development";
    if(isInDevelopment) console.log(`App online at - http://localhost:${port}`)
    else console.log(`App online at - `)
    
})