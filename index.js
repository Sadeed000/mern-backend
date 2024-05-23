const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
const fileupload = require('express-fileupload');   

app.use(fileupload({useTempFiles: true}))
const corsOptions = {
    origin: 'https://mern-frontend-nnqw.vercel.app', // Your frontend URL
    credentials: true, // Allow credentials
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(cors({
    origin: 'https://mern-frontend-nnqw.vercel.app',
    credentials: true
  }));
  app.use(cors());


app.use(express.json()); // Parse JSON bodie


app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
