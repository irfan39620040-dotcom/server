const express = require("express")
const cors = require("cors");
const connectDB = require("./configs/db");

const  app = express();
require("dotenv").config()


app.use(cors({ origin:"http//localhost:5173"}))

connectDB()
app.use(express.json());

app.listen(5000, ()=>{
    console.log("server is running");
    
})