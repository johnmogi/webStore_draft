const dal = require("../data-access-layer/dal");

// INSERT INTO `cart` (`cartID`, `userID`, `cartTime`) VALUES ('1', '23', '2020-05-30 19:56:34.000000');
// DATE_FORMAT(cartTime, "%m/%d/%Y") as cartTime
async function addCart(cart) {
    const sql = `INSERT INTO cart VALUES (DEFAULT,  ?, ?)`;
    const newCart = await dal.executeAsync(sql, [cart.userID, cart.cartTime]);
    return newCart;
    }
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
    
    

module.exports = {
    addCart,
    verifyDuplicate,
    addProductToCartItem
}