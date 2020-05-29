const User = require('../models/auth');
const cryptography = require('../helpers/cryptography');

// Signup: 
function addUser(user) {
    user.password = cryptography.hash(user.password);
    console.log(user)
    return user.save();
}

// function checkEmail(email) {
//     return User.find({ email }).exec();
// }

// function checkId(id) {
//     return User.find({ id }).exec();
// }

/// ------- Login -------- //
function login(info) {
    info.password = cryptography.hash(info.password);
    return User.find({ username_email: details.username_email, password: info.password });
}


module.exports = {
    addUser
    // checkEmail,
    // checkId,
    // login
}