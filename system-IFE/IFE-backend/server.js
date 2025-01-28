const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/errorHandler');
const adminRoutes = require('./routes/adminRoutes');
const crewRoutes = require('./routes/crewRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const healthTipsRoutes = require('./routes/api/passengers/health-tips');
const feedbackRoutes = require('./routes/api/passengers/feedback');
const recommendationsRoutes = require('./routes/api/passengers/recommendations');
const sleepModeRoutes = require('./routes/api/passengers/sleep-mode');
const seatControlRoutes = require('./routes/api/seats/control');
const seatOrdersRoutes = require('./routes/api/seats/orders');
const destinationRoutes = require('./routes/api/destination/info');
const sequelize = require('./config/database'); // Sequelize 객체 가져오기

// 환경 변수 설정
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev')); // 요청 로깅
app.use(bodyParser.json()); // JSON 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/crew', crewRoutes);
app.use('/api/passengers', passengerRoutes);
app.use('/api/passengers/health-tips', healthTipsRoutes);
app.use('/api/passengers/feedback', feedbackRoutes);
app.use('/api/passengers/recommendations', recommendationsRoutes);
app.use('/api/passengers/sleep-mode', sleepModeRoutes);
app.use('/api/seats/control', seatControlRoutes);
app.use('/api/seats/orders', seatOrdersRoutes);
app.use('/api/destination/info', destinationRoutes);

// 에러 처리
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  errorHandler(err, res);
});

// Sequelize 모델 동기화 및 서버 실행
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Sequelize connected successfully');

    await sequelize.sync({ alter: true });
    console.log('Sequelize models synchronized successfully');

    // 서버 실행
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Sequelize initialization error:', error.message);
    process.exit(1); // 서버 실행 중단
  }
})();

module.exports = app;
