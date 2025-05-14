require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./config/db');
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/users', require('./routes/userRoutes'));

// Conectar a la base de datos y levantar el servidor
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
