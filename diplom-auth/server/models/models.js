let {Schema, model} = require('mongoose')

let UserSchema = new Schema ({
    email:{type:String, unigque:true, required:true},
    password: {type:String, required:true},
    role: {type:String, default:"USER"}
})

module.exports = model("User",UserSchema)