const Member = require('../Models/memberModel')


exports.isAdmin = async(req, res, next)=>{
    let user = await Member.findById(req.headers.userId);
    if(user === null){
        res.status(401).json({
            status: 'failed',
            message: "Signup or sign in"
        })
        return
    }
    if(user.role !== 'admin'){
        res.status(401).json({
            status: 'failed',
            message: "You do not have permission for this"
        })
        return
    }
    next();
}
