const mongoose = require('mongoose')

const ConnDB =  () =>{
    try {
          mongoose.connect(process.env.MONGO_URI)
          console.log("Database connected Successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = ConnDB