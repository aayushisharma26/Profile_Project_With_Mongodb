const mongoose=require('mongoose')
const validator=require('validator')


mongoose.connect('mongodb://localhost:27017/Profile')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})


const userSchema=new mongoose.Schema({
    first_name : {
        type:String,
        required:true

    },last_name : {
        type:String,
        required:true

    },
    email : {
        type:String,
        required:true,
        unique:[true,'Email id already exits!'],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error ('Invalid Email id')
            }
        }
        

    },
    password : {
        type:String,
        required:true
       

    }
        
    
  
})
console.log("done")
const Information=new mongoose.model("detail",userSchema)
module.exports=Information

