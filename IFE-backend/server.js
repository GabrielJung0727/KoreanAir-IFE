const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 기본 경로 설정
app.get('/', (req, res) => {
  res.send('IFE System API Running');
});

// 라우트 설정
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// 서버 실행
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));
