// const JwtUtil = require('../utils/jwtUtil');
const falsey = require('falsey');
const { jwtVerify } = require('jose');
require('dotenv').config();

// const jwtUtil = new JwtUtil();

async function authenticateToken(req, res, next) {
  const token = req.header('Bearer');

  if (falsey(token)) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: No validated token' });
  }

  jwtVerify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(token);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.sub;
    next();
  });
}

(module.exports = authenticateToken), jwtVerify;
