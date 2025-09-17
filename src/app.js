const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importar rutas
const indexRoutes = require('./routes/index');

// Usar rutas
app.use('/', indexRoutes);

// Configuración de puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});