const mongoose = require('mongoose');

const Loans = mongoose.Schema({
    member: {type: String, required: true},
    amount: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    paid: {type: Boolean, default: false},
    installments: {type: []}
})


Loans.pre('save', function(next){
    if(this.isModified('installments')){
        try {
            let sum = this.installments.reduce((tot, curr)=> tot.amount += curr.amount)
            if(sum >= this.amount) this.paid = true
        } catch (error) {
            // possible zero error
        }
    }
    next()
})


module.exports = mongoose.model('Loans', Loans)

