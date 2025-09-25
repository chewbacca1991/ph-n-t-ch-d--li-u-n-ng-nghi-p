const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/nongnghiep', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối thành công tới MongoDB!'))
  .catch(err => console.error('Không thể kết nối tới MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
