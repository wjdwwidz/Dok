const JwtUtil = require('../utils/jwtUtil');
const dotenv = require('dotenv').config();
const falsey = require('falsey');
dotenv.config();

const jwtUtil = new JwtUtil();

function authenticateToken(req, res, next) {
  const token = req.header('Bearer');

  if (falsey(token)) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: No validated token' });
  }

  jwtVerify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.sub;
    next();
    x;
  });
}

module.exports = authenticateToken;
