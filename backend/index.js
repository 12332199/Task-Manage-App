const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ConnDB = require('./db/db')
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/user",require("./routes/userRoute"))
app.use("/api/task",require("./routes/taskRoute"))


const PORT = process.env.PORT
 ConnDB()

app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`)
});