const express = require('express');
const router = express.Router();
const Auth = require('../models/auth');
const authLogic = require('../business-logic/auth-logic');
const jwt = require("jsonwebtoken");
const jwtLogic = require('../helpers/jwt');     

router.post('/register', async (request, response) => {
    try {
        const auth = new Auth(request.body);
        //check if user & email exists
        // const checkEmail = await authLogic.checkEmail(auth.username_email);
        // const checkId = await authLogic.checkId(auth.id);
        // if (checkEmail.length !== 0) { throw "Email already exists" }
        // if (checkId.length !== 0) { throw "ID already exists" }
        /// --------------------
        const newUser = await authLogic.addUser(auth);
        delete newUser.password
        //save jwt token
        const jwtToken = jwt.sign({ auth: newUser }, 'secretkey');
        response.json({ auth: newUser, jwtToken });
    } catch (error) {
        response.status(500).send(error);
    }
});

// router.post('/login', async (request, response) => {
//     try {
//         const details = request.body;
//         const getUser = await userLogic.login(details);
//         if (getUser.length === 0) {
//             response.json('Wrong email / password');
//             return;
//         }
//         const user = getUser[0];
//         const jwtToken = jwt.sign({ user }, 'secretkey');
//         response.json({ user, jwtToken });
//     } catch (error) {
//         response.status(500).send(error.message);
//     }
// });
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
