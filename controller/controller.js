const Information =require('../model/db')

const post_data=async(req,res)=>{
    try{
        const userInformation= new Information({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password
        })
        const result=await userInformation.save()
        res.send(result)
    }catch(err){
        console.log(err);
        res.send({message:'email already exits'})
    }
}

const get_data=async(req,res)=>{
    try{
        const rest=await Information.find()
        res.send(rest)

    }catch(err){
        console.log(err);
        res.send({message:"err"})
    }
}


const getById=async(req,res)=>{
    try{
        const id=req.params.id
        const result =await Information.findById(id)
        res.send(result)
    }catch(err){
        res.send(err)
    }

}


const update_data=async(req,res)=>{
    try{
        const id=req.params.id
        const result=await Information.findByIdAndUpdate(id,{
            $set:{                
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                password:req.body.password
            }                
        });
        res.send(result)
        
        console.log(result)
    }catch(err){
        console.log(err);
    }
}

const delete_data=async(req,res)=>{
    try{
        const id =req.params.id
        const result=await Information.findByIdAndDelete(id)
        console.log(result);
        res.send({message:"delete data "})  
    }catch(er){
        console.log(err)
    }
}

module.exports={post_data,get_data,update_data,delete_data,getById}    
// ,result:result