const{Schema, model} = require("mongoose")

const User = new Schema({
    // name:{
    //     type: String,
    //     required: true,
    // },
    // second_name:{
    //     type: String,
    //     required: true,
    // },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    // roles:{
    //     type: String,
    //     required:true,
    //     enum: ['doctor', 'patient']
    // },
    // age:{
    //     type: Number,
    //     required: true,
    //     min: 1,
    //     max: 100
    // },
    // diagnostic:{
    //     type: String,
    //     required: true,
    //     enum: ['left', 'right']
    // }

})

module.exports = model('User',User)
