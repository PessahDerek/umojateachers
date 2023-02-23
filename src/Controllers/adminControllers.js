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

