const Member = require('../Models/memberModel')


exports.isMember = async(req, res, next)=>{
    // return console.log(req.headers.userid)
    let isMember = await Member.findOne({_id: req.headers.userid})
    if(isMember === null)return res.status(401).json({
        message: "Please login first, or create an account"
    })
    next()
}


exports.isAdmin = async(req, res, next)=>{
    let user = await Member.findById(req.headers.userid);
    if(user === null){
        return res.status(404).json({
            status: 'failed',
            message: "Signup or sign in"
        })
    }
    if(user.role !== 'admin'){
        return res.status(401).json({
            status: 'failed',
            message: "You do not have permission for this action"
        })
    }
    console.log("here...")
    next();
}
