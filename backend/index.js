const express = require("express");

// This is used to get the data from other domain
const cors = require("cors") 

// This is used to find the secret environmental variables
require("dotenv").config(); 

// This is the database connection 
const connectDb = require("./config/config.js")

// This is the router 
const templateRouter = require("./routes/index.route.js")

// Error handler
const {errorHandler} = require("./middlewares/index.middleware.js")

// This will start the connection with the database 
connectDb();

const port = process.env.PORT || 5000

const app = express();

// This will be used to parse the json 
app.use(express.json());

// This one will be used to get the data from the other website or the other port or other ip address basically
app.use(cors())

app.use("/api/template", templateRouter);

// This is the global Error handler which will catch the error
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`The Quizkar is live at port ${port}`)
})