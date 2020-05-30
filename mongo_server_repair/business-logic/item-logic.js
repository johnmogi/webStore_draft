const Item = require('../models/item');

function getAllItems() {
    return Item.find({}).populate("categories").exec();
}
function addItem(item) {
    return item.save();
}
// function searchProduct(name) {
//     return Product.find({ name: new RegExp(name)}).exec();
// } 

module.exports = {
    getAllItems,
    addItem
    // searchProduct
}