import mongoose from 'mongoose'
const Schema= mongoose.Schema

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
}, {timestamps:true})

export const Student=mongoose.model('Student',studentSchema)