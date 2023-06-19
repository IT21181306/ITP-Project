const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cuserSchema = new Schema({
    type: {
        type : String,
        required: true 
    },
    
    title: {
        type : String,
        required: true 
    },

    First_Name: {
        type : String,
        required: true 
    },

    Last_Name: {
        type : String,
        required: true 
    },

    Job_Position: {
        type : String,
        required: true 
    },

    email: {
        type : String,
        required: true 
    },

    Phone_Number: {
        type : Number,
        required: true 
    },

    username: {
        type : String,
        required: true 
    },

    password: {
        type : String,
        required: true 
    },
})

const Cuser = mongoose.model("Cuser", cuserSchema);

module.exports = Cuser;