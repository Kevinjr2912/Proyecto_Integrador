require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const customersRoutes = require('./routes/clientes');
const productsRoutes = require('./routes/productos');
const adminRoutes = require('./routes/administrador');

const app = express();
const port = process.env.DB_PORT || 3000;   

app.use(cors());

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());

// Usar las rutas de los items
app.use('/customers', customersRoutes);
app.use('/products', productsRoutes);
app.use('/admins',adminRoutes)

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
