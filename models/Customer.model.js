const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const CustomerSchema = new Schema({

    Cid: { type: String, required: true },
    username: { type: String, required: true },
    Address: { type: String, required: true },
    Phone: { type: Number, required: true, maxlength: 10},
    birthday: { type: Date, required: true },
    Email: { type: String, required: true },

}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;