const express=require("express"),
const router=new express.Router(),
const student=require("../models/students")


router.post("/students",async(req,res)=>{
    try{
        
    const user=new student(req.body)
    const createuser= await user.save()
    res.status(201).send(createuser)

    }catch(e){
        res.status(400).send(e)
    }
})

//read students data

router.get("/students",async(req,res)=>{
    try{
        
        
        const studentsData=await student.find()
        
        res.send(studentsData)
}catch(e){
    res.send(e)
}
    
})

//read individual student data

router.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id
        const studentData=await student.findById(_id);
        res.send(studentData)

    }catch(e){
        res.status(500).send(e)
    }
 
})

//update data

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id
        const update=await student.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(update)
    }catch(e){
        res.status(404).send(e)
    }
})

//delete data

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id
        const deleteStudentData=await student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send()
        }
        res.send(deleteStudentData)
    }catch(e){
        res.status(500).send(e)
    }

})


module.exports=router




//the above code is basically to make your code structure more readable by writing codes in diff file and importing it
//create students data


// app.post("/students",(req,res)=>{

//     console.log(req.body)

//     const user=new student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
    
//     // res.send("Hello")
// });

// app.post("/students",async(req,res)=>{
//     try{
        
//     const user=new student(req.body)
//     const createuser= await user.save()
//     res.status(201).send(createuser)

//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// //read students data

// app.get("/students",async(req,res)=>{
//     try{
        
        
//         const studentsData=await student.find()
        
//         res.send(studentsData)
// }catch(e){
//     res.send(e)
// }
    
// })

// //read individual student data

// app.get("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id
//         const studentData=await student.findById(_id);
//         res.send(studentData)

//     }catch(e){
//         res.status(500).send(e)
//     }
 
// })

// //update data

// app.patch("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id
//         const update=await student.findByIdAndUpdate(_id,req.body,{
//             new:true
//         })
//         res.send(update)
//     }catch(e){
//         res.status(404).send(e)
//     }
// })

// //delete data

// app.delete("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id
//         const deleteStudentData=await student.findByIdAndDelete(_id);
//         if(!_id){
//             return res.status(400).send()
//         }
//         res.send(deleteStudentData)
//     }catch(e){
//         res.status(500).send(e)
//     }

// })
