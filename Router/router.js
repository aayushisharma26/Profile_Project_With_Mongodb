const {post_data,get_data,getById,update_data,delete_data} = require("../controller/controller");

const express=require('express')

var router=express.Router();

router.post("/user",post_data)

router.get("/user/get",get_data)

router.get("/user/get/profile/:id",getById)

router.put("/user/profile/:id",update_data)

router.delete("/user/delete/:id",delete_data)

module.exports=router