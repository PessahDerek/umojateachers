const Members = require('../Models/memberModel')

exports.getAllUsers = async (req, res) => {
    let users = await  Members.find({}).select('-password');
    return res.status(200).json(users);
}
