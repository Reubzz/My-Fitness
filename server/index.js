require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// DB Imports
const usersDB = require("./schema/usersDB")

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
    credentials: true
}));

// set headers for you to be able to set cookies on the browser
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

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
        res.redirect('/')
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
        res.send("The newly registered user's name is = " + data.userdata.username)
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