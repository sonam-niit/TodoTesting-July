const UserModel= require('../models/user.model')
const getAllUsers=async(req,res)=>{
    try {
        const resp = await UserModel.find();
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
const createUser=async(req,res)=>{
    try {
        const {name,email,password}= req.body;
        const newUser= new UserModel({name,email,password});
        const resp=await newUser.save();
        res.status(201).json({message:'User Created',response:resp})
    } catch (error) {
        console.log(error)
    }
}
const deleteUser=(req,res)=>{
    
}
const updateUser=(req,res)=>{
    
}

module.exports={
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}