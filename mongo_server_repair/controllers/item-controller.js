const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const itemsLogic = require('../business-logic/item-logic');
const fs = require('fs');

router.get('/', async (request, response) => {
    try {
        const items = await itemsLogic.getAllItems();
        response.json(items);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post('/add', async (request, response) => {
    try {
        // if (!request.files) {
        //     throw "You need to upload image !"
        // }
        // //upload image 
        // const file = request.files.image;
        // const randomName = uuid.v4();
        // const extension = file.name.substr(file.name.lastIndexOf('.'));
        // file.mv('./uploads/products/' + randomName + extension);
        //-------------
        const item = new Item(JSON.parse(request.body.item));
        // product.img = randomName + extension;
        const addedItem = await itemsLogic.addItem(item);
        response.json(addedItem);
    } catch (error) {
        response.status(500).send(error.message);
    }
});


// router.get('/search-product/:name', async (request, response) => {
//     try {
//         const name = request.params.name;
//         const result = await productsLogic.searchProduct(name);
//         response.json(result);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

// router.get('/image/:name', async (request, response) => {
//     try {
//         const name = request.params.name;
//         fs.readFile('../server/uploads/products/' + name,(err,data)=> {
//             if(err){
//                 throw err;
//             }
//             response.end(data);
//         });
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

module.exports = router;