const mongooose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongooose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phoneno:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
        unique:true

    },
    address:{
        type:String,
        required:true
    }
})

const Student=new mongooose.model("Student",studentSchema);


module.exports=Student;