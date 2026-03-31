require("dotenv").config()
const app=require("./app");
require("./config/db")
const PORT=process.env.PORT||5000

app.listen((PORT),()=>{
    console.log(`server is running on http://127.0.0.1:${PORT}`)
})