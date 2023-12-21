const express= require("express")
const app= express()
const db = require("./config/mongoose")
const path = require("path")
const User = require("./Model/User")


app.get('/',(req,res)=>{
    res.send('waheguru ji')
})
app.listen(1020,()=>{
    console.log( "----Server-Start----")
})