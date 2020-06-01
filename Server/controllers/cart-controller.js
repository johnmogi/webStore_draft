const express = require('express');
const router = express.Router();
const cartLogic = require('../business-logic/cart-logic');
const sendError = require("../helpers/send-error");

router.post('/', async (request, response) => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const nowTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    try {
        const cart = request.body;
        cart.cartTime = nowTime;
        // cart.userId = request.body;
        const newCart = await cartLogic.addCart(cart);
        console.log(newCart)
        response.json(newCart);
    } catch (error) {
        sendError(response, error);
    }
});

// add a product to cart - //**allowing** duplicated items 
//TODO update in case of duplication 
router.post('/add', async (request, response) => {
    try {
        const product = request.body;
        const verifyDuplicate = await cartLogic.verifyDuplicate(product);
        if (verifyDuplicate.productID) {
            throw 'This Product has already been added to cart'
        }
        const addedProduct = await cartLogic.addProductToCartItem(product);
        response.json(addedProduct);
    } catch (error) {
        sendError(response, error);
    }
});

router.get('/history', async (request, response) => {
    try {
        const customer = request.body;
        const oldCart = await cartLogic.historyCart(customer);
        response.json(oldCart);
    } catch (error) {
        sendError(response, error);
    }
});
router.delete('/drop', async (request, response) => {
    try {
        const cart = request.body;
    await cartLogic.deleteCart(cart);
    response.sendStatus(204);
    } catch (error) {
        sendError(response, error);
    }
});
router.delete('/drop/:id', async (request, response) => {
    try {
        const id = +request.params.id;

    await cartLogic.deleteItemFromCart(id);
    response.sendStatus(204);
    } catch (error) {
        sendError(response, error);
    }
});
module.exports = router;