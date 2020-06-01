const dal = require("../data-access-layer/dal");

// new cart
// DATE_FORMAT(cartTime, "%m/%d/%Y") as cartTime
async function addCart(cart) {
    const sql = `INSERT INTO cart VALUES (DEFAULT,  ?, ?)`;
    const newCart = await dal.executeAsync(sql, [cart.userID, cart.cartTime]);
    return newCart;
}
//old cart
async function historyCart(customer) {
    const sql = `SELECT * FROM cartItem WHERE cartID = ? `;
    const oldCart = await dal.executeAsync(sql, [customer.cartID]);
    return oldCart;
}
// maybe convert this validation to update instead?
async function verifyDuplicate(product) {
    const sql = `SELECT * FROM cartItem WHERE cartID = ? AND productID = ?`;
    const getCart = await dal.executeAsync(sql, [product.cartID, product.productID]);
    return getCart;
}
// INSERT INTO `cartItem` (`itemID`, `productID`, `amount`, `totalPrice`, `cartID`) VALUES (NULL, '4', '1', '2500', '1');

async function addProductToCartItem(cart) {
    const sql = `INSERT INTO cartItem VALUES (DEFAULT, ?, ?, ?, ?)`;
    const newCart = await dal.executeAsync(sql, [cart.productID, cart.amount, cart.totalPrice, cart.cartID]);
    return newCart;
}
async function deleteCart(cart) {
    const sql = `DELETE FROM cartItem WHERE cartID = ${cart.cartID}`;
    const newCart = await dal.executeAsync(sql);
    return newCart;
}
async function deleteItemFromCart(id) {
    const sql = `DELETE FROM cartItem WHERE productID = ${id}`;
    const newCart = await dal.executeAsync(sql);
    return newCart;
}




module.exports = {
    addCart,
    historyCart,
    verifyDuplicate,
    addProductToCartItem,
    deleteCart,
    deleteItemFromCart
}