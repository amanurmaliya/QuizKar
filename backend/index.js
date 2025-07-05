const express = require("express");

// This is used to get the data from other domain
const cors = require("cors") 

// This is used to find the secret environmental variables
require("dotenv").config(); 

// This is the database connection 
const connectDb = require("./config.js")

// This will start the connection with the database 
connectDb();

const port = process.env.PORT || 5000

const app = express();

// This will be used to parse the json 
app.use(express.json());

// This one will be used to get the data from the other website or the other port or other ip address basically
app.use(cors())

// Making the routes
app.get("/", (req, res)=> {
    res.send("This is the Home page from the backend")
})


app.listen(port, ()=> {
    console.log(`The Quizkar is live at port ${port}`)
})