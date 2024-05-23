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
    origin: '', // specify your client's origin
    credentials: true, // allow credentials (cookies, etc.)
  };
app.use(cors({
    origin: '',
    credentials: true
  }));
  app.use(cors());


const corsOptions ={
   origin:'', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

  app.use(cors(corsOptions));
  

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
