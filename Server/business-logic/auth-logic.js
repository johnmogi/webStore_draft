const dal = require('../data-access-layer/dal')
const cryptography = require('../helpers/cryptography');

async function addUser(user) {
    user.password = cryptography.hash(user.password);
    const sql = 'INSERT INTO users VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ? ,0)'
    await dal.executeAsync(sql, [user.userFirstName, user.userLastName, user.userName, user.password, user.city, user.streetAddress, user.id, user.isAdmin]);
    delete user.password;
    return user;
}

async function lookUpUser(info) {
    const sql = `SELECT userName FROM users WHERE userName = ?`
    const user = await dal.executeAsync(sql, [info]);
    return user;
}
function lookUpID(ID) {
    const sql = `SELECT userName FROM users WHERE id = ?`
    const user = dal.executeAsync(sql, [ID]);
    return user;
}

function login(info) {
    info.password = cryptography.hash(info.password);
    const sql = `SELECT * FROM users WHERE userName = ? AND password = ?`
    const user = dal.executeAsync(sql, [info.userName, info.password]);
    return user;
}

module.exports = {
    addUser,
    lookUpUser,
    lookUpID,
    login
}