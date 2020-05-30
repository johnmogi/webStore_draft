const dal = require("../data-access-layer/dal");

async function getAllProducts() {
    const sql = `SELECT * FROM products`;
    const products = await dal.executeAsync(sql);
    return products;
    }

module.exports = {
    getAllProducts
    // addItem
    // searchProduct
}

// const sql = `SELECT vacationID,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
