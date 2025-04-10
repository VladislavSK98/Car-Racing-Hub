require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'SoftSecret';

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '11d' });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        console.log("SECRET:", process.env.SECRET)
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken
}