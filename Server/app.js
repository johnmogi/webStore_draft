require("./data-access-layer/dal");
global.config = require("./config");
const { port } = require("./config");

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require("cors");
// controllers
const authController = require("./controllers/auth-controller");


const server = express();

server.use(cors());
server.use(fileUpload());
server.use(express.json());

server.use('/api/auth', authController);


server.listen({port}, () => console.log(`Listening on http://localhost:${port}`));
