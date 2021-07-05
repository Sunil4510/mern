const dotenv = require("dotenv");
dotenv.config({path: './config.env'});
const mongoose = require("mongoose");
const express = require('express');
const cookieParser = require("cookie-parser");
const e = require("express");
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

require('./db/conn');
//const user = require('./model/userSchema');
app.use(express.json());

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}

app.use(require('./router/auth'));
// app.get("/",(req,res)=>{
//     res.send("hello");
// });





app.listen(PORT,()=>{
    console.log(`connected to the ${PORT}`);
});
