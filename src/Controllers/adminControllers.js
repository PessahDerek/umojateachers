const Loans = require('../Models/Loans');
const Members = require('../Models/memberModel');
const { solveShares } = require('../Utils/SolveAddition');

exports.getAllUsers = async (req, res) => {
    let users = await  Members.find({}).select('-password');
    console.log('users: ', users)
    return res.status(200).json({
        data: users
    });
}

exports.addMember = async(req, res) => {
    let newMember = new Members(req.body)
    await newMember.save()
    .then(resp => {
        return res.status(200).json({
            message: `${resp.firstName} is now a member🎉`
        })
    })
    .catch(err => {
        if (err.code === 11000) {
            return res.status(409).json({
                message: "Member already exists"
            })
        }
        res.status(500).json({
            message: "Member cannot be added, Please Contact support"
        })
    })
}

exports.updateShare = async(req, res) => {
    let {firstName, shares, previous} = req.body
    let value = solveShares(shares)
    Members.updateOne({_id: req.body._id}, {shares: value}, (err, result)=>{
        if(err){
            console.log(`Error updating shares at ${Date.now()}: `, err)
            res.status(500).json({
                message: "Could Not Update Share, try later!"
            })
            return
        }

        if(result.acknowledged)return res.status(200).json({
            newValue: value,
            message: `${firstName}'s shares have been updated from Ksh.${previous} to Ksh.${value}`
        })
        res.status(304).json({
            message: `${firstName}'s shares have not been updated from Ksh.${previous} to Ksh.${value}`})
    })
}

exports.grantLoan = async(req, res) => {
    let {memberId, loanRequest } = req.body
    // find the member
    let member = await Members.findById(memberId)
    if(member === null) return res.status(404).json({message: "The member's records cannot be found, consider adding them"})
    // find if there is current loan
    let existing = await Loans.findOne({$and: [{member: memberId}, {paid: false}]})
    // create new loan

    if(existing === null){
        console.log("new loan")
        try {
            let newLoan = new Loans({member: memberId, amount: loanRequest})
            member.loans = loanRequest
            await newLoan.save()
            await member.save() 
            res.status(200).json({
                message: `${member.firstName}'s new loan has been recorded`
            })
        } catch (error) {
            res.status(500).json({
                message: "We are unable to save loan record, try again after a few minutes"
            })
        }
        return
    }
    try {
        // update existing
        existing.amount += loanRequest
        member.loans += loanRequest
        console.log('existing loan')
        await existing.save()
        await member.save()
        return res.status(200).json({
            message: "Loan amount has been added"
        })
    } catch (error) {
        res.status(500).json({
            message: "Loan could not be added, try again later or contact support"
        })
    }
}

exports.payLoan = async(req, res) => {
    let { memberId, loanRequest } = req.body
    // find member 
    let member = await Members.findById(memberId)
    if(member === null) return res.status(404).json({message: "We cant find this member, try adding them"})
    // find if they have unpaid loan
    let unpaid = await Loans.findOne({$and: [{member: memberId}, {paid: false}]})
    if((member === null) || (unpaid === null)) return res.status(404).json({message: `Try awarding a new loan, ${member.firstName}'s last loan was paid`})
    try {
        member.installments.push(loanRequest)
        unpaid.installments.push({amount: loanRequest, date: Date.now()})
        await member.save()
        await unpaid.save()
        res.status(200).json({
            message: `${member.firstName}'s loan has been updated`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "We could not update loan, try again later. If it persists contact support"
        })
    }
}

