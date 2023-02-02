
const mongoose = require('mongoose');

const newMember = new mongoose.Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: 'member'}
})

module.exports = mongoose.model('Members', newMember);
