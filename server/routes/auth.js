const express = require('express');
const User = require('../models/User');
const bcryptjs = require("bcryptjs");
const {check, validationResult} = require('express-validator')
const router = new express()
const jsonwebtoken = require('jsonwebtoken');
const config = require('config');


router.post('/registration',
    [
        check('email', 'uncorrect email').isEmail(),
        check('password', 'password size').isLength({min:3, max:12})
    ],
    async  (req,res) =>{
    try {

        console.log(req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message:'error registration' , errors})
        }
        const {name, second_name, patronymic, age, sex, diagnostic, email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate){
            return res.status(400).json({message: `user ${email} exist`})
        }

        const hash_password = await bcryptjs.hash(password, 8)
        const user = new User({name, second_name, patronymic, age, sex, diagnostic, email, password: hash_password})
        await user.save()

        

    } catch (e) {
        console.log(e);
        res.send({message: 'server error'})
    }
})


router.post('/login',
    [
        check('email', 'uncorrect email').isEmail(),
    ],
    async  (req,res) =>{
    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message:'error login' , errors})
        }

        const{email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "user not found"})
        }

        const isPassValid = bcryptjs.compareSync(password, user.password)
        if(!isPassValid){
            return res.status(400).json({message: `password invalid`})
        }

        const token = jsonwebtoken.sign({id:user.id,email:user.email}, config.get("secretKey"),{expiresIn:"1h"})
        return res.json({
            token,
            user:{
                id: user.id,
                email: user.email
            }})

        console.log(1111)
    } catch (e) {
        console.log(e);
        res.send({message: 'server error'})

    }
})

module.exports = router