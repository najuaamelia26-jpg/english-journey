const jwt = require('jsonwebtoken');

// JWT verification middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    // Check if token is provided
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
}

module.exports = verifyToken;