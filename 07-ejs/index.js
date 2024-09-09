const express = require('express')
const path = require('path');

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/skills",(req,res)=>{
    res.render("skills")
})
app.get("/service",(req,res)=>{
    res.render("service")
})  
app.get("/Contact",(req,res)=>{
    res.render("Contact")
})

app.listen(8000, ()=>{
console.log(`server stared on http://localhost:8000/`)})