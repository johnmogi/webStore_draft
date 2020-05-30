const express = require('express');
const router = express.Router();
const sendError = require("../helpers/send-error");

const productLogic = require('../business-logic/product-logic');
const fs = require('fs');

router.get('/', async (request, response) => {
    try {
        const products = await productLogic.getAllProducts();
        response.json(products);
    } catch (error) {
        sendError(response, error);
    }
});


module.exports = router;