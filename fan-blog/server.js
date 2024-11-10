const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// MariaDB 연결 설정
const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql',
    logging: false, // SQL 로그를 표시하지 않음
});

// 사용자 모델 정의
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

});

// 레코드 삽입 시 createdAt과 updatedAt을 수동으로 설정
const newUser = await User.create({
    username: 'testuser',
    password: 'hashedpassword',
    email: 'testuser@example.com',
    createdAt: new Date(),  // createdAt을 수동으로 설정
    updatedAt: new Date(),  // updatedAt을 수동으로 설정
});

// 앱 설정
const app = express();
const port = process.env.PORT || 5000;

// MariaDB 연결
sequelize.sync()
    .then(() => {
        console.log('MariaDB 연결 및 테이블 생성 완료');
    })
    .catch((err) => {
        console.error('MariaDB 연결 오류:', err);
    });

// CORS 설정 (허용된 도메인만 접근 허용)
const allowedOrigins = ['http://localhost:3000', 'https://yourdomain.com'];
app.use(cors({ origin: allowedOrigins }));

// 요청 로그 출력
app.use(morgan('dev'));

// 응답 압축
app.use(compression());

// API 요청 제한 설정 (15분 동안 100번의 요청만 허용)
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15분
    max: 100, // 100번의 요청까지만 허용
    message: 'Too many requests, please try again later.'
});
app.use('/api', apiLimiter);

// 보안 헤더 강화 (production 환경에서만 활성화)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// 정적 파일 서빙 (React 빌드된 파일 서빙)
app.use(express.static(path.join(__dirname, 'build')));

// 요청 본문을 JSON으로 파싱
app.use(express.json());

// 사용자 등록 API
app.post('/api/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        });

        res.status(201).json({ message: '사용자 등록 성공' });
    } catch (error) {
        res.status(500).json({ message: '서버 오류', error });
    }
});

// 사용자 로그인 API
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: '사용자가 존재하지 않습니다.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: '로그인 성공', token });
    } catch (error) {
        res.status(500).json({ message: '서버 오류', error });
    }
});

// 인증된 사용자만 접근할 수 있는 보호된 API
app.get('/api/protected', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>" 형식으로 받음

    if (!token) {
        return res.status(401).json({ message: '토큰이 없습니다.' });
    }

    // JWT 토큰 검증
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
        }

        // 토큰이 유효하면 사용자 정보 반환
        res.json({ message: '인증됨', user: decoded });
    });
});

// 기본 경로
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// 다른 모든 요청에 대해 index.html을 반환 (싱글 페이지 애플리케이션 처리)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});








