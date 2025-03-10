require("./data-access-layer/dal");
global.config = require("./config");
const { port } = require("./config");

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require("cors");
// controllers
const authController = require("./controllers/auth-controller");
const productController = require("./controllers/product-controller");
const adminController = require("./controllers/admin-controller");
const cartController = require("./controllers/cart-controller");


const server = express();

server.use(cors());
server.use(fileUpload());
server.use(express.json());

server.use('/api/auth', authController);
server.use('/api/products', productController);
server.use('/api/super', adminController);
server.use('/api/cart', cartController);


server.listen({port}, () => console.log(`Listening on http://localhost:${port}`));
