require("./config/mongoose");
const express = require("express");
const app = express();
const router = require("./config/routing");



app.set("view engine", "ejs");


app.use(express.urlencoded({extended:true}));

app.use(router);
app.use(express.static("public"));



app.listen(80,()=> console.log("running ..."));
