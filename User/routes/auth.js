const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// 메모리 스토리지
let users = [];

// 사용자 등록
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = { username, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: '사용자가 등록되었습니다.' });
});

// 로그인
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(400).json({ message: '잘못된 인증 정보입니다.' });
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(400).json({ message: '잘못된 인증 정보입니다.' });
  }

  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;



