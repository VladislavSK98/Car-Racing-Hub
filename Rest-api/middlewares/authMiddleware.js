const jwt = require('jsonwebtoken');
const { authCookieName } = require('../app-config');
const { userModel } = require('../models');

module.exports = (req, res, next) => {
    const token = req.cookies[authCookieName];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        try {
            const user = await userModel.findById(decoded.id).select('-password');
            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }
            req.user = user;
            next();
        } catch (error) {
            next(error);
        }
    });
};
