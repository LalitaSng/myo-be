const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
});

const memberModel = mongoose.model('Member',memberSchema);

module.exports = memberModel;