require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// DB Imports
const usersDB = require("./schema/usersDB");
const exerciseDB = require("./schema/exerciseDB");
const yogaDB = require("./schema/yogaDB");

const port = process.env.PORT;
const app = express();

const DB_URI = process.env.NODE_ENV === 'development' ? process.env.DEV_DB_URI : process.env.DB_URI;
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


// app.set('view engine', 'ejs');
// app.use(express.static("public"));
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

app.get("/yoga", async (req, res) => {
    try {
        const data = await yogaDB.find().exec();
        res.status(200).json({
            cdoe: 200,
            message: "Data fetched successfully from database.",
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

app.post("/yoga/add", async (req, res) => {
    try {
        data = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.image,
            videoUrl: req.body.video,
            type: req.body.type,
            duration: req.body.duration
        }
        await yogaDB.create(data);
        res.status(200).json({
            code: 200,
            message: "Added Yoga exercise",
            data: data
        })
    } catch (err) {
        console.error(err);
        res.status(400).json({
            code: 400,
            message: "Error adding yoga exercise",
            data: data
        })
    }
})
app.delete("/yoga/remove", async (req, res) => {
    try {
        await yogaDB.deleteOne(req.body._id);
        res.status(200).json({
            code: 200,
            message: "Yoga Data deleted to Database.",
            data: data
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            code: 400, 
            message: "Error deleting Yoga Data from Database.",
            data: data
        })
    }
})
app.get("/exercise", async (req, res) => {
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
app.post("/exercise/add", async (req, res) => {
    try {
        data = {
            name: req.body.name,
            description: req.body.description,
            bodyPart: req.body.bodyPart,
            imageUrl: req.body.imageUrl,
            videoUrl: req.body.videoUrl,
            type: req.body.type,
            duration: req.body.duration
        };
        await exerciseDB.create(data);

        res.status(200).json({
            code: 200,
            message: "Exercie Data added to Database.",
            data: data
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            code: 400, 
            message: "Error adding Exercie Data to Database.",
            data: data
        })
    }
})
app.delete("/exercise/remove", async (req, res) => {
    try {
        await exerciseDB.deleteOne(req.body._id);
        res.status(200).json({
            code: 200,
            message: "Exercise Data deleted to Database.",
            data: data
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            code: 400, 
            message: "Error deleting Exercie Data from Database.",
            data: data
        })
    }
})


// Login and Register POST requests
app.post("/login", (req, res) => {
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

app.post("/register", (req, res) => {
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

app.get('/logout', (req, res) => {
    authSys.logout({
        response: res
    })
    res.status(200).json({ 
        code: 200,
        message: "Logged Out successfully"
    })
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    const isInDevelopment = process.env.NODE_ENV === "development";
    if(isInDevelopment) console.log(`App online at - http://localhost:${port}`)
    else console.log(`App online at - `)
    
})