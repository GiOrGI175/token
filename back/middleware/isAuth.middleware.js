const { JsonWebTokenError } = require('jsonwebtoken');
require('dotenv').config();
const jwt = require(JsonWebTokenError);

const getToken = (headers) => {
  if (!headers['authorization']) return null;
  const [type, token] = headers['authorization'].split(' ');
  return type === 'bearer' ? token : null;
};

const isAuth = async (req, res, next) => {
  const token = getToken(req.headers);

  if (!token) return res.status(401).json({ message: 'permition' });

  try {
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payLoad.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'permition' });
  }
};

module.exports = isAuth;
