const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({

    _id: {
        type: Schema.Types.ObjectId,
        ref: "register",
    },

    name: {
        type: String,
        required: true
    },
    Email: { type: String, required: true },

    nearbyTown: {
        type: String,
        required: true
    },

    contactNo: {
        type: Number,
        required: true,
        maxlength: 10
    },

    userType: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },


    img1: {
      type: String,
      required: true
    }



})

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;