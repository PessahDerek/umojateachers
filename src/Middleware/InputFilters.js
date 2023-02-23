

exports.noSingleEmpties = async(req, res, next) =>{
    Object.keys(req.body).forEach(key => {
        if(req.body[key] == ''){
            res.status(400).json({
                message: "All Fields are Required"
            })
            return
        }
    })
    next()
}