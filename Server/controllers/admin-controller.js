const express = require('express');
const router = express.Router();
const adminLogic = require('../business-logic/admin-logic');
const uuid = require('uuid');
const sendError = require("../helpers/send-error");


router.post('/insert', async (request, response) => {
    try {
        // if (!request.files) {
        //     throw "add an image to proceed"
        // }
        // const file = request.files.image;
        // const randomName = uuid.v4();
        // const extension = file.name.substr(file.name.lastIndexOf('.'));
        // file.mv('./uploads/products/' + randomName + extension);
        
        
        const product = request.body;
        // product.imageUrl = randomName + extension;
        const addedProduct = await adminLogic.insertProduct(product);
        response.json(addedProduct);
    } catch (error) {
        sendError(response, error);
    }
});



module.exports = router;