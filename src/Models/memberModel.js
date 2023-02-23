
const mongoose = require('mongoose');

const newMember = new mongoose.Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    password: {
        type: String, required: true,
        default: () => "12345678"
    },
    role: {type: String, default: 'member'},
    shares: { type: Number, default: 0 },
    loans: {type: Number, default: 0}
})

module.exports = mongoose.model('Members', newMember);
