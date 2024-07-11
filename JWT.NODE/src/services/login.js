const bcrypt=require("bcrypt");
const User = require("../models/user");

async function login(email,password){
    try{
        const existingUser = await User.findOne({email});
        if(!existingUser){
            throw new Error("user not found"); 
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid){
            throw new Error("incorrect password"); 
        }
        const token = generateToken(existingUser)
        return token;
        }catch(error){
            throw new Error("Invalid credentials");
        }
    }

    module.exports = {
        login
    }