const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    persons: {
        type: String
    },
    selectedDate: {
        type: String
    },
    source: {
        type: String
    },
    destination: {
        type: String
    },
    passengerClass: {
        type: String
    },
    flightPrice: {
        type: Number
    },
    seats: {
        type: Array
    }
})
module.exports = mongoose.model('User', userSchema); 