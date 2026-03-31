const express=require("express");
const  productRoute  = require("./routes/productRoute");

const app=express();
app.use(express.json())
app.use("/api/product",productRoute);


app.get("/",(req,res)=>(
res.send("server is Running")
))

module.exports=app