const Member = require("../Models/memberModel");

exports.signUp = async function(req, res, async){
    const { password, confPassword, phone } = req.body


    // check for empty input
    let trueList = Object.values(req.body).filter(p=>p !== '');
    if(trueList.length === 5){
        // validate input
        if((phone.length > 10) || (phone.charAt(0) !== '0')) return res.status(500).json({message: "Enter Correct Phone Number Starting with 0 like 072..."})
        if(password !== confPassword) return res.status(500).json({message: "Passwords don't match!"})
        
        // prevent user from setting their own roles
        let saveThisUser = req.body
        try { //if field exists probably malicious and not from our app
            saveThisUser.role = ""
        } catch (error) {
            
        }
        // save input
        let newMember = new Member(saveThisUser)
        await newMember.save()
        .then(resp=>{
            let user = resp
            user.password = ""
            return res.status(200).json({
                message: "Successful",
                user: user
            })
        })
        .catch(err=>{
            console.log(err.message)
            return res.status(304).json({
                message: "Could Not Create Account, contact admin"
            })
        })
        return
    }
    res.status(404).json({
        message: "Fill Every Detail"
    })
}
exports.login = async (req, res)=>{
    const {phone, password} = req.body;
    // validate input
    if(!phone || !password) return res.status(500).json({message: "Empty Details"})
    
    let member = await Member.find({$and: [{phone: phone, password: password}]})
    
    let isMem = member.length > 0
    res.status(isMem ? 200 : 404).json({
        message: isMem ? "Welcome" : "Wrong Credentials",
        user: isMem ? member[0] : {}
    })
}

