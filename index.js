
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
const fileupload = require('express-fileupload');   



const corsOptions = {
    origin: 'https://mern-frontend-nnqw.vercel.app', // Replace this with your frontend URL
    credentials: true // Allow credentials (cookies, HTTP authentication)
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));


// const corsOptions ={
//    origin:'http://localhost:3000', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

  

// app.use(cors({
//     origin : `http://localhost:4000`,
//     credentials : true
// }))


app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
