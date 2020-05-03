const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})





app.listen(PORT,()=>{
    console.log("server running on port ",PORT)
})