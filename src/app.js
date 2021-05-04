const express=require("express");
require("./db/conn");
const student=require("./models/students")
const studentRouter=require("./router/student")


const app=express();
const port=process.env.PORT || 3000;

app.use(express.json())
app.use(studentRouter)


app.listen(port,()=>{
   console.log(`connection successful at ${port}`) 
})