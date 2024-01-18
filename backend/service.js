require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router = require('./routes/workouts')
const connect=require('./config/connectDB')
const Port=5001 ||process.env.port

// express app
const app=express()

// middleware
app.use(express.json())

app.use(cors())


// routes
app.use('/api/workouts',router)

// connect to DataBase
connect()

app.listen(Port,(err)=>{
    err? console.log(err):console.log(`Yes Successfull ${Port}`)
})