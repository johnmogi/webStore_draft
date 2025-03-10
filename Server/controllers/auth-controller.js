const express = require('express');
const router = express.Router();
const authLogic = require('../business-logic/auth-logic');
const sendError = require("../helpers/send-error");

const jwt = require("jsonwebtoken");
const jwtLogic = require('../helpers/jwt');     

router.post('/register', async (request, response) => {
    const auth =request.body;
    try {
        //check if user & email exists
         const checkUserName = await authLogic.lookUpUser(auth.userName);
         const checkId = await authLogic.lookUpID(auth.id);
         if (checkUserName.length !== 0) { throw "Email already exists" }
         if (checkId.length !== 0) { throw "ID already exists" }

         const newUser = await authLogic.addUser(auth);
        delete newUser.password
        //save jwt token
        const jwtToken = jwt.sign({ auth: newUser }, 'secretkey');
        response.json({ auth: newUser, jwtToken });
    } catch (error) {
        sendError(response, error);
    }
});

router.post('/login', async (request, response) => {
    try {
        const info = request.body;
        const getUser = await authLogic.login(info);
        if (getUser.length === 0) {
            response.json('Incorrect UserName or Password');
            return;
        }
        const user = getUser[0];
        const jwtToken = jwt.sign({ user }, 'secretkey');
        response.json({ user, jwtToken });
    } catch (error) {
        sendError(response, error);
    }
});

// router.post('/check-form', async (request, response) => {
//     try {
//         const form = request.body;
//         // check if email & ID already taken.
//         form.email = await userLogic.checkEmail(form.email);
//         form.id = await userLogic.checkId(form.id);
//         response.json(form);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

// router.get('/auto-login', jwtLogic.verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(authData);
//         }
//     });
// });

module.exports = router;
