const dal = require("../data-access-layer/dal");

// INSERT INTO `products` (productName, catID, price, imageUrl) VALUES (NULL, '33', '1', '33', '33');

async function insertProduct(product) {
    const sql = `INSERT INTO products VALUES (DEFAULT, ?, ?, ?, ?)`;
    const products = await dal.executeAsync(sql, [product.productName, product.catID, product.price, product.imageUrl]);
    return products;
}

function getAllCategories() {
    return Category.find({}).exec();
}

module.exports = {
    insertProduct,
    // addProduct,
    getAllCategories
}