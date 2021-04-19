import express from "express" 
import bodyParser from "body-parser"
import quoteRouter from "./route/quotes.js"
import mongoose from 'mongoose'

const dbURI='mongodb+srv://gaurav3:gaurav786@cluster0.b4muw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        (result) => {
            console.log("Connected to the Database")
            server.listen(PORT)
            console.log("Server started successfully")
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )

const server=express()
const PORT=3000
server.use(bodyParser.json())

// server.get("/",(req,res)=> res.send("Welcome to my library"))
var homepage=(req,res)=> res.send("Welcome to my library") //handle http://localhost:3000/
server.use("/quote",quoteRouter)
server.get("/",homepage)