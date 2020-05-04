const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const {JWT_SECRET}= require('../keys')
const requireLogin = require('../middleware/requireLogin')


router.get('/protected',requireLogin,(req,res)=>{
    res.send('hello user')
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if (!email || !password || !name){
        res.status(422).json({error:"please input all the field"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if (savedUser){
            return res.status(422).json({error:"user is already exist"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                name,
                password:hashedpassword
            })
            user.save()
            .then(user=>{
                res.json({message:'save succesfully'})
            })
            .catch(err=>{
                console.log(err)
            })     
        })
    })
    .catch(err=>{
        console.log(err)
    })

})
router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if (!email || !password){
        res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"invalid email or pass"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router