const mongoose = require ("mongoose")

mongoose.connect(process.env.MONGO_DB_URI).then(function(){
   console.log("connected to database")
})

//  mongoose.connect(`mongodb://127.0.0.1:27017/KhaataBook`).then (
//     console.log("connected to database")
//  )

module.exports = mongoose.connection