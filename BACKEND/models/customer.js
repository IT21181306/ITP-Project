const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    
    
    ctitle: {
        type : String,
        required: true 
    },

    cFirst_Name: {
        type : String,
        required: true 
    },

    cLast_Name: {
        type : String,
        required: true 
    },

   

    cemail: {
        type : String,
        required: true 
    },

    cPhone_Number: {
        type : Number,
        required: true 
    },

    cusername: {
        type : String,
        required: true 
    },

    cpassword: {
        type : String,
        required: true 
    },
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;