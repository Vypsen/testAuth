const{Schema, model} = require("mongoose")

const User = new Schema({
    name:{
        type: String,
        required: true,
    },
    second_name:{
        type: String,
        required: true,
    },
    patronymic:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
        min: 1,
        max: 120
    },
    sex:{
        type: String,
        required: true,
    },
    diagnostic:{
        type: String,
        required: true,
        enum: ['Левоееееееееееееееее', 'Правоееееееееееееееееееее']
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    roles:{
        type: String,
        required:false,
        enum: ['doctor', 'patient']
    },
    

})

module.exports = model('User',User)
