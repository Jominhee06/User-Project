const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send("인증을 위해 토큰이 필요합니다.");

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) return res.status(401).send("유효하지 않은 토큰입니다.");
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;



