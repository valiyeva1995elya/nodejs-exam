const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const accountsRouter = require("./routers/accountsRouter");
const postsRouter = require("./routers/postsRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/static", express.static(__dirname + "/style"));

mongoose.connect("mongodb+srv://Elya:elya@cluster0.qmgwgf9.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err){
        console.log("ERROR", err);
    }else{
        console.log("start server");
        app.use("/accounts", accountsRouter);
        app.use("/posts", postsRouter);
        app.listen(3000);
    }
}); 